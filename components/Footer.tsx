import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer>
      <div className="big">{site.name}</div>
      <div className="links">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={site.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
      </div>
      <div className="bot">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
