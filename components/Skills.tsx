import { skills } from "@/data/site";

export default function Skills() {
  return (
    <section className="red skills" data-reveal>
      <div className="lbl">Explore my stack</div>
      <p>I build products from interface to API: React and Next.js frontends, polished motion, Java and Node backends, and Web3 integrations on Solana.</p>
      <ul className="pills">
        {skills.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </section>
  );
}
