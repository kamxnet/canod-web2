export function PageIntro({ label, title, children }: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return <section className="page-hero"><div className="site-container">
    <p className="eyebrow page-kicker">{label}</p>
    <h1 className="page-title">{title}</h1>
    <div className="page-description">{children}</div>
  </div></section>;
}
