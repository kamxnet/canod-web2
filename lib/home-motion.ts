const clamp = (value: number) => Math.max(0, Math.min(1, value));

export function initializeHomeMotion(root: HTMLElement) {
  const preference = matchMedia("(prefers-reduced-motion: reduce)");
  const chapters = [...root.querySelectorAll<HTMLElement>("[data-story-chapter]")];
  const steps = [...root.querySelectorAll<HTMLElement>("[data-process-step]")];
  let disposed = false, frame = 0, dirty = true, rootTop = 0, rootHeight = 1;
  let positions: { element: HTMLElement; top: number; height: number }[] = [];
  let stepPositions: { element: HTMLElement; top: number; bottom: number }[] = [];

  function measure() {
    const box = root.getBoundingClientRect();
    rootTop = box.top + scrollY;
    rootHeight = box.height;
    positions = chapters.map(element => {
      const rect = element.getBoundingClientRect();
      return { element, top: rect.top + scrollY, height: rect.height };
    });
    stepPositions = steps.map(element => {
      const rect = element.getBoundingClientRect();
      return { element, top: rect.top + scrollY, bottom: rect.bottom + scrollY };
    });
    dirty = false;
  }
  function draw() {
    frame = 0;
    if (disposed || document.hidden || preference.matches) return;
    if (dirty) measure();
    const top = scrollY, bottom = top + innerHeight;
    root.style.setProperty("--story-progress", String(clamp((top - rootTop) / Math.max(1, rootHeight - innerHeight))));
    for (const position of positions) {
      position.element.dataset.sectionActive = String(position.top < bottom && position.top + position.height > top);
      position.element.style.setProperty("--chapter-progress", String(clamp((bottom - position.top) / Math.max(1, position.height + innerHeight * .15))));
    }
    const point = top + innerHeight * .55;
    for (const step of stepPositions) step.element.dataset.stepActive = String(step.top <= point && step.bottom >= point);
  }
  function schedule() {
    if (!disposed && !frame && !document.hidden && !preference.matches) frame = requestAnimationFrame(draw);
  }
  function resize() { dirty = true; schedule(); }
  function configure() {
    cancelAnimationFrame(frame);
    frame = 0;
    root.dataset.motion = preference.matches ? "off" : "on";
    if (preference.matches) {
      root.style.setProperty("--story-progress", "1");
      chapters.forEach(chapter => chapter.style.setProperty("--chapter-progress", "1"));
      steps.forEach(step => { step.dataset.stepActive = "false"; });
    } else resize();
  }
  function visibility() {
    root.dataset.documentHidden = String(document.hidden);
    if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
    else schedule();
  }
  const observer = new ResizeObserver(resize);
  observer.observe(root);
  preference.addEventListener("change", configure);
  document.addEventListener("visibilitychange", visibility);
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", resize, { passive: true });
  configure();
  visibility();
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    observer.disconnect();
    preference.removeEventListener("change", configure);
    document.removeEventListener("visibilitychange", visibility);
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", resize);
    root.dataset.motion = "off";
  };
}
