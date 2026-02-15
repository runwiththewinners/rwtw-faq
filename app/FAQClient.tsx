"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "What is RWTW?",
    a: "RWTW (Run With The Winners) is a sports betting community that provides daily picks, exclusive plays, and structured betting guidance across multiple sports. We post straight bets, parlays, and our highest-conviction Max Bet Play of the Day.",
  },
  {
    q: "What sports do you cover?",
    a: "We cover NBA, NFL, MLB, NHL, UFC, and select college games. Plays are only posted when we see real value — no forced action.",
  },
  {
    q: "What are the different membership tiers?",
    a: "We offer four tiers: Premium ($39.99/week or $79.99/month), High Rollers ($249.99/month), Max Bet Play of the Day ($24.99 one-time purchase), and Player Props ($19.99/week or $49.99/month).",
  },
  {
    q: "What is included in Premium?",
    a: "Premium gives you all daily plays including straight bets, parlays, and plus-money plays. It also includes the Max Bet Play of the Day every single day — that's a $24.99/day pick built right into your subscription.",
  },
  {
    q: "What is High Rollers?",
    a: "High Rollers is the top tier — EVERYTHING included. All daily plays, the Max Bet Play of the Day, AND Player Props. If you're serious about this, High Rollers is where you belong.",
  },
  {
    q: "What is the Max Bet Play of the Day?",
    a: "The Max Bet Play of the Day is our highest-conviction, most researched pick of the day. One play, max confidence. It's included with Premium and High Rollers, or available as a standalone $24.99 one-time purchase.",
  },
  {
    q: "What is Player Props?",
    a: "Player Props is our newest offering — daily player prop picks powered by ChalkBoard with full analysis. Available at $19.99/week or $49.99/month. It's also included in the High Rollers tier.",
  },
  {
    q: "When are plays posted?",
    a: "Plays are posted daily, usually in the morning or closer to game time depending on line movement.",
  },
  {
    q: "Are wins guaranteed?",
    a: "No. Sports betting involves risk. We focus on long-term profitability and disciplined strategy, not guarantees. We don't hope and we don't guess.",
  },
  {
    q: "Is RWTW beginner-friendly?",
    a: "Absolutely. Plays are clear, easy to follow, and suitable for both beginners and experienced bettors. Every pick comes with full analysis so you understand the reasoning.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Subscriptions can be managed or canceled at any time directly through Whop.",
  },
  {
    q: "Do you offer refunds?",
    a: "No refunds. All sales are final once access is granted.",
  },
  {
    q: "Which tier should I pick?",
    a: "If you want the full experience with every play we offer, go High Rollers. If you want daily plays with the Max Bet included, Premium is your best value. If you just want our single best pick of the day, grab the Max Bet Play of the Day. And if you're a props bettor, Player Props is your lane.",
  },
];

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="faq-wrap">
        <div className="faq-content">
          <header className="faq-hero">
            <span className="faq-label">Got Questions?</span>
            <h1 className="faq-title">
              Frequently Asked <span className="gold">Questions</span>
            </h1>
            <p className="faq-sub">
              Everything you need to know about Run With The Winners.
            </p>
          </header>

          <div className="faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`faq-item${openIndex === i ? " faq-open" : ""}`}
                onClick={() => toggle(i)}
              >
                <div className="faq-question">
                  <span>{item.q}</span>
                  <svg
                    className="faq-chevron"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>

          <footer className="faq-footer">
            <p>
              Still have questions? Reach out in the support chat.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

const styles = `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}

:root{
  --gold:#d4a843;--gold-hi:#f0c95c;--gold-lo:#a07c2e;
  --txt:#f5f1eb;
  --txt2:rgba(245,241,235,.55);
  --txt3:rgba(245,241,235,.3);
  --border:rgba(255,255,255,.08);
  --glass:rgba(255,255,255,.03);
  --card-bg:rgba(255,255,255,.03);
  --strong:rgba(255,255,255,.85);
}

@media(prefers-color-scheme:light){
  :root{
    --txt:#1a1a1a;
    --txt2:rgba(26,26,26,.6);
    --txt3:rgba(26,26,26,.35);
    --border:rgba(0,0,0,.1);
    --glass:rgba(0,0,0,.03);
    --card-bg:rgba(0,0,0,.03);
    --strong:rgba(0,0,0,.85);
  }
}

.faq-wrap{
  min-height:100vh;overflow-x:hidden;-webkit-font-smoothing:antialiased;
  font-family:'DM Sans','Barlow',system-ui,sans-serif;color:var(--txt);
}

.faq-content{max-width:680px;margin:0 auto;padding:0 20px}

/* Hero */
.faq-hero{text-align:center;padding:60px 0 40px}
.faq-label{
  font-size:10.5px;font-weight:600;letter-spacing:4px;text-transform:uppercase;
  color:var(--gold);display:block;margin-bottom:14px;
  animation:fadeUp .6s ease both;
}
.faq-title{
  font-family:'Bebas Neue','Oswald',sans-serif;
  font-size:clamp(2.5rem,8vw,4.5rem);line-height:.95;letter-spacing:-0.5px;
  animation:fadeUp .6s ease .1s both;
}
.gold{
  background:linear-gradient(135deg,var(--gold-hi),var(--gold),var(--gold-lo));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
  background-clip:text;
}
.faq-sub{
  font-size:15px;font-weight:300;color:var(--txt2);
  margin-top:14px;animation:fadeUp .6s ease .2s both;
}

/* FAQ List */
.faq-list{display:flex;flex-direction:column;gap:8px;padding-bottom:40px}

.faq-item{
  border:1px solid var(--border);border-radius:12px;
  background:var(--card-bg);backdrop-filter:blur(12px);
  overflow:hidden;cursor:pointer;
  transition:border-color .3s ease,background .3s ease;
  animation:fadeUp .5s ease both;
}
.faq-item:nth-child(1){animation-delay:.1s}
.faq-item:nth-child(2){animation-delay:.13s}
.faq-item:nth-child(3){animation-delay:.16s}
.faq-item:nth-child(4){animation-delay:.19s}
.faq-item:nth-child(5){animation-delay:.22s}
.faq-item:nth-child(6){animation-delay:.25s}
.faq-item:nth-child(7){animation-delay:.28s}
.faq-item:nth-child(8){animation-delay:.31s}
.faq-item:nth-child(9){animation-delay:.34s}
.faq-item:nth-child(10){animation-delay:.37s}
.faq-item:nth-child(11){animation-delay:.4s}
.faq-item:nth-child(12){animation-delay:.43s}
.faq-item:nth-child(13){animation-delay:.46s}

.faq-item:hover{border-color:rgba(212,168,67,.15)}
.faq-open{border-color:rgba(212,168,67,.2);background:var(--glass)}

.faq-question{
  display:flex;align-items:center;justify-content:space-between;
  padding:18px 22px;gap:16px;
  font-family:'Oswald',sans-serif;font-weight:500;font-size:15px;
  letter-spacing:0.8px;color:var(--txt);
  user-select:none;
}

.faq-chevron{
  flex-shrink:0;color:var(--txt3);
  transition:transform .3s cubic-bezier(.16,1,.3,1),color .3s ease;
}
.faq-open .faq-chevron{transform:rotate(180deg);color:var(--gold)}

.faq-answer{
  max-height:0;overflow:hidden;
  transition:max-height .4s cubic-bezier(.16,1,.3,1),padding .3s ease;
}
.faq-open .faq-answer{max-height:300px;padding:0 22px 18px}

.faq-answer p{
  font-size:13.5px;line-height:1.65;color:var(--txt2);
}

/* Footer */
.faq-footer{
  text-align:center;padding:20px 0 60px;
}
.faq-footer p{
  font-size:13px;color:var(--txt3);letter-spacing:.3px;
}

@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}

@media(max-width:600px){
  .faq-hero{padding:40px 0 28px}
  .faq-title{font-size:clamp(2rem,10vw,3rem)}
  .faq-question{padding:15px 18px;font-size:14px}
  .faq-open .faq-answer{padding:0 18px 15px}
  .faq-answer p{font-size:12.5px}
}
`;
