import { Avatar } from './Avatar';
import { Reveal } from '../animations/Reveal';
import { trainers } from '../data/trainers';

/**
 * Люди сообщества. Асимметричная сетка: карточки намеренно «разъезжаются»
 * по вертикали, чтобы блок читался как живое фото, а не как оргструктура.
 */
export function Trainers() {
  return (
    <section className="section trainers" id="trainers">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="kicker">04 — люди</p>
            <h2 className="display display--xl">Кто садится с вами за пару</h2>
          </div>
          <Reveal delay={0.1}>
            <p className="lead">
              Тренеры и постоянные участники — практикующие разработчики. Они не читают лекций: садятся рядом и
              проходят раунд вместе с вами.
            </p>
          </Reveal>
        </div>

        <ul className="trainers__grid">
          {trainers.map((t, i) => (
            <Reveal as="li" key={t.id} delay={(i % 3) * 0.08} className="trainer">
              <div className="trainer__media">
                {t.photo ? (
                  <img src={t.photo} alt={`Фотография: ${t.name}`} loading="lazy" decoding="async" />
                ) : (
                  <Avatar id={t.id} name={t.name} className="trainer__avatar" />
                )}
                <span className="trainer__badge mono" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="trainer__body">
                <h3 className="trainer__name">{t.name}</h3>
                <p className="trainer__role mono">{t.role}</p>
                <p className="trainer__focus">{t.focus}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
