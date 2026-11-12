const text = "Available for freelance ✦ Remote ✦ Full-time ✦ Bangalore, India ✦ ";

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div>{text.repeat(8)}</div>
    </div>
  );
}
