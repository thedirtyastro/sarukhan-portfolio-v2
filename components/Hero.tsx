import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero">
      <span className="bigS" aria-hidden="true">S</span>
      <h1 className="hero-title">frontend developer<br />+ web3 engineer</h1>
      <div className="meta">
        <p>Hi, I&apos;m Sarukhan. A Frontend Engineer, Web3 Developer and UI Engineer with 2+ years of experience building fast, expressive interfaces.</p>
        <p>Based in {site.location}.<br />Available for freelance, remote and full-time work.</p>
        <p>{site.email}<br />{site.phone}</p>
      </div>
    </section>
  );
}
