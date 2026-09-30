import { Reveal } from '../animations/Reveal';
import { communityStats } from '../data/stats';

/**
 * Цифры сообщества: крупная типографика, волосяные разделители.
 * Значения — placeholder из data/stats.ts, заменяются без правки вёрстки.
 */
export function Stats() {
  return (
    <section className="section stats" aria-label="Факты о сообществе">
      <div className="container">
        <div className="section-head">
          <p className="kicker">07 — сообщество в цифрах</p>
          <h2 className="display display--xl">
            Не платформа, не курс.
            <br />
            <span className="outline-text">Просто встреча, которая повторяется.</span>
          </h2>
        </div>

        <dl className="stats__grid">
          {communityStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="stat">
              <dt className="stat__label mono">{s.label}</dt>
              <dd className="stat__value display">{s.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
