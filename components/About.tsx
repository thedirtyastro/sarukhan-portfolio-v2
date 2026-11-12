import { services } from "@/data/site";

export default function About() {
  return (
    <section className="red about" id="about">
      <div className="l" data-reveal>
        <p>I&apos;m Sarukhan, a frontend engineer and Web3 developer in Bangalore with 2+ years of experience.</p>
        <p>I care about clean component architecture, performance, and interfaces that feel considered down to the motion. I work across the stack when a project needs it.</p>
      </div>
      <ul data-reveal>
        {services.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </section>
  );
}
