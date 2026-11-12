import { projects } from "@/data/projects";

export default function Works() {
  return (
    <>
      <section className="red" id="works">
        <div className="works-h">
          <h2>selected works</h2>
          <sup aria-label={`${projects.length} projects`}>{projects.length}</sup>
        </div>
      </section>
      <ul>
        {projects.map((p, i) => (
          <li className="row" key={p.name} data-reveal>
            <span className="idx">{String(i + 1).padStart(2, "0")}</span>
            <span className="t">{p.name}</span>
            <small>{p.type}</small>
            <div className="card">
              <b>{p.name}</b>
              <span className="m">{p.year} · {p.stack}</span>
              <p>{p.description}</p>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer">Live site ↗</a>
              ) : (
                <span className="soon">No live link</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
