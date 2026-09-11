const clamp = (value: number) => Math.max(0, Math.min(1, value));

export function initializeHomeMotion(root: HTMLElement) {
  const preference = matchMedia("(prefers-reduced-motion: reduce)");
  const chapters = [
    ...root.querySelectorAll<HTMLElement>("[data-story-chapter]"),
  ];
  const reveals = [...root.querySelectorAll<HTMLElement>(".home-reveal")];
  let frame = 0,
    disposed = false;
  let revealObserver: IntersectionObserver | undefined;

  function draw() {
    frame = 0;
    if (disposed || preference.matches || document.hidden) return;
    const box = root.getBoundingClientRect();
    const progress = clamp(-box.top / Math.max(1, box.height - innerHeight));
    const positions = chapters.map((chapter) => ({
      chapter,
      box: chapter.getBoundingClientRect(),
    }));
    root.style.setProperty("--story-progress", String(progress));
    for (const { chapter, box: position } of positions) {
      chapter.dataset.sectionActive = String(
        position.top < innerHeight && position.bottom > 0,
      );
      chapter.style.setProperty(
        "--chapter-progress",
        String(
          clamp(
            (innerHeight * 0.75 - position.top) / Math.max(1, position.height),
          ),
        ),
      );
    }
  }
  function schedule() {
    if (!disposed && !frame && !preference.matches && !document.hidden)
      frame = requestAnimationFrame(draw);
  }
  function configure() {
    revealObserver?.disconnect();
    cancelAnimationFrame(frame);
    frame = 0;
    root.dataset.motion = preference.matches ? "off" : "on";
    if (preference.matches) {
      root.style.setProperty("--story-progress", "1");
      chapters.forEach((chapter) =>
        chapter.style.setProperty("--chapter-progress", "1"),
      );
      reveals.forEach((element) => {
        element.dataset.reveal = "visible";
      });
      return;
    }
    revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = "visible";
            revealObserver?.unobserve(entry.target);
          }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0 },
    );
    // Do not hide content already visible when the optional enhancement starts.
    reveals.forEach((element) => {
      if (
        !element.dataset.reveal &&
        element.getBoundingClientRect().top > innerHeight
      )
        element.dataset.reveal = "pending";
      revealObserver?.observe(element);
    });
    schedule();
  }
  function visibility() {
    root.dataset.documentHidden = String(document.hidden);
    if (document.hidden) {
      cancelAnimationFrame(frame);
      frame = 0;
    } else schedule();
  }
  const resizeObserver = new ResizeObserver(schedule);
  resizeObserver.observe(root);
  preference.addEventListener("change", configure);
  document.addEventListener("visibilitychange", visibility);
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  configure();
  visibility();
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    revealObserver?.disconnect();
    resizeObserver.disconnect();
    preference.removeEventListener("change", configure);
    document.removeEventListener("visibilitychange", visibility);
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    root.dataset.motion = "off";
    reveals.forEach((element) => {
      element.dataset.reveal = "visible";
    });
  };
}
