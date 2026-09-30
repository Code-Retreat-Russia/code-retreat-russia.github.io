import { Marquee } from '../animations/Marquee';
import { Reveal } from '../animations/Reveal';
import { values } from '../data/content';

/**
 * «Что происходит на ретрите»: бегущая строка ключевых практик
 * + сетка характеристик с волосяными разделителями (не карточки-пузыри).
 */
export function Values() {
  return (
    <section className="section values" id="values">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="kicker">{values.kicker}</p>
            <h2 className="display display--xl">{values.title}</h2>
          </div>
        </div>
      </div>

      <Marquee className="values__marquee" duration={32}>
        {values.marquee.map((word) => (
          <span className="values__marquee-word" key={word}>
            {word}
            <span className="values__marquee-sep" aria-hidden="true">
              ✳
            </span>
          </span>
        ))}
      </Marquee>

      <div className="container">
        <ul className="values__grid">
          {values.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 2) * 0.08} className="value-card">
              <span className="value-card__num mono">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="value-card__title">{item.title}</h3>
              <p className="value-card__text">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
