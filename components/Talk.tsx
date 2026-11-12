import { site } from "@/data/site";

export default function Talk() {
  return (
    <section className="talk" id="talk">
      <svg viewBox="0 0 200 300" aria-hidden="true">
        <path d="M110 10c40 30 60 90 30 140s-20 90-70 140" fill="none" stroke="#fff" strokeWidth="26" strokeLinecap="round" />
      </svg>
      <h2>let&apos;s talk</h2>
      <p>I&apos;m available for freelance, remote and full-time roles.</p>
      <a className="btn" href={`mailto:${site.email}`}>Get in touch</a>
    </section>
  );
}
