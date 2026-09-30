import { Reveal } from '../animations/Reveal';
import { about } from '../data/content';

/**
 * Секция «Что такое Code Retreat»: редакционная двухколоночная композиция
 * на светлой (cream) подложке — визуальный контрапункт тёмного hero.
 */
export function About() {
  return (
    <section className="section section--cream about" id="about">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="kicker">{about.kicker}</p>
            <h2 className="display display--xl about__title">{about.title}</h2>
          </div>
          <Reveal className="about__head-lead" delay={0.1}>
            <p className="about__p about__p--lead">{about.paragraphs[0]}</p>
          </Reveal>
        </div>

        <div className="about__body">
          <div className="about__text">
            {about.paragraphs.slice(1).map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="about__p">{p}</p>
              </Reveal>
            ))}
          </div>

          <ul className="about__facts">
            {about.facts.map((f, i) => (
              <Reveal as="li" key={f.term} delay={i * 0.1} className="about__fact">
                <p className="about__fact-term mono">{f.term}</p>
                <p className="about__fact-desc">{f.desc}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
