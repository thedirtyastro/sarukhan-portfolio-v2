export type Project = { name: string; year: string; type: string; description: string; stack: string; url?: string };

// name | year | type | description | stack | live url
const raw = [
  "Kaching|2025|Web3 Lottery Platform|Blockchain-powered lottery platform. I built responsive lottery interfaces, reusable components, wallet connectivity and animation.|Next.js, Tailwind CSS, MongoDB, Framer Motion, Solana|https://kaching.vip/",
  "Perps Mobile|2025|Perpetual Trading Platform|Mobile-first experience for a perpetual trading platform, adapting complex trading workflows to smaller screens. Not currently live.|Next.js, MongoDB, Web3|",
  "Rocket Finance|2024|Peer-to-Peer Lending|Peer-to-peer lending app. I built the backend services with Java and Spring Boot.|Java, Spring Boot, REST APIs, MySQL|",
  "Mifos Admin Tool|2024|Open-Source Admin Tool|Full-stack work on Mifos administrative tooling across UI and application workflows.|AngularJS, Spring Boot, MySQL|https://docs.mifos.org/mifosx/user-manual/for-administrators-mifos-x-platform/administration/users",
  "Perps & Swap UI|2025|Web3 Trading Interfaces|Frontend interfaces for perpetual trading and token swaps, built with reusable components and responsive layouts.|Next.js, Tailwind CSS|https://kana-labs-swap.vercel.app/",
  "Points Leaderboard|2025|Ranking & Rewards|Leaderboard showing user rankings and points with dynamic API data in a responsive UI.|Next.js, PostgreSQL|https://app.xyra.trade/points",
  "TradingView Plugins|2024|Charting & Plugins|Frontend work on TradingView chart integrations and chart customisations for trading experiences.|JavaScript, TradingView|https://in.tradingview.com/widget/",
  "Hesed Counseling|2024|Freelance Website|Responsive counselling website built as freelance work while practising AI-assisted development.|Figma, Next.js, Tailwind CSS, Vercel|https://thedirtyastro.github.io/hesed-counselling/",
  "Kana Labs Hero|2024|Hero Section|Self-initiated hero-section project for the company with a polished Web3-style look and motion.|Next.js, Tailwind CSS, Framer Motion|https://kana-labs.vercel.app/",
  "Personal Portfolio|2026|Personal Portfolio|Personal portfolio used to showcase work while exploring AI-assisted development.|Next.js, Tailwind CSS, GSAP|https://sarukhan-muthuraman.vercel.app/",
  "Sanru Photography|2024|Freelance Photography Site|Freelance photography portfolio focused on visual presentation and image-led storytelling.|Figma|",
  "Kalakruthi Costumes|2026|Freelance Landing Page|Landing page for a costume business, built as part-time freelance work.|Next.js|https://kalakruthi-costumes.vercel.app/",
  "Kana Landing|2026|Landing Page|Landing page built to practise fast delivery and marketing-oriented presentation.|Next.js|https://kana-landing-nw.vercel.app/",
  "Sarukhan Developer Website|2026|Personal Portfolio|Personal developer website presenting work and freelance services.|Web Development|https://sarukhan.devs.li/",
  "Oracure Green|2026|Freelance Landing Page|Business landing page developed as part-time freelance work.|Web Development|https://oracure-green.vercel.app/",
  "Dentelope|2026|Dental / Healthcare|Dental and healthcare landing page built as freelance work.|Web Development|https://dentelope.vercel.app/",
  "Coffee Theatre|2026|Cafe Website|Cafe landing page developed as part-time freelance work.|Web Development|https://coffee-theatre.vercel.app/",
  "Laasia Website|2026|Business Website|Business landing page developed as freelance work.|Web Development|https://laasia-website.vercel.app/",
  "Charu Creation|2026|Creative Business|Creative-business landing page developed as part-time freelance work.|Web Development|https://charu-creation.vercel.app/",
  "Hemanth Photography|2026|Photography Landing Page|Photography landing page with image-led presentation and visual hierarchy.|Web Development|https://hemanth-photography.vercel.app/",
  "OutReach CRM|2026|Personal Product|My own CRM for tracking cold calls, leads and outreach for freelance business development.|Next.js, TypeScript, Supabase|https://outreach-crm-web-five.vercel.app/",
  "Sarukhan Portfolio|2026|Personal Portfolio|A portfolio version showcasing development work.|Web Development|https://sarukhan-portfolio.vercel.app/",
  "Kana Labs Swap|2026|Web3 Token Swap|Frontend for a Web3 token-swap interface in the Kana Labs ecosystem.|Next.js, Web3|https://xyra.trade/swap",
];

export const projects: Project[] = raw.map((line) => {
  const [name, year, type, description, stack, url] = line.split("|");
  return { name, year, type, description, stack, url: url || undefined };
});
