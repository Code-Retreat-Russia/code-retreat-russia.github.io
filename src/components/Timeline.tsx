import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { timeline } from '../data/content';

/**
 * Таймлайн вечера: вертикальный лайнер заполняется по мере скролла
 * секции — ощущение движения по расписанию мероприятия.
 * Хуки всегда вызываются; reduced-motion только отключает transform.
 */
export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const lineScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section className="section section--soft timeline" id="timeline">
      <div className="container">
        <div className="section-head">
          <p className="kicker">{timeline.kicker}</p>
          <h2 className="display display--xl">{timeline.title}</h2>
        </div>

        <div className="timeline__rail" ref={ref}>
          <div className="timeline__track" aria-hidden="true">
            <motion.div
              className="timeline__fill"
              style={reduced ? { transform: 'scaleY(1)' } : { scaleY: lineScale }}
            />
          </div>

          <ol className="timeline__steps">
            {timeline.steps.map((step, i) => (
              <motion.li
                className="timeline__step"
                key={step.time}
                initial={reduced ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="timeline__card">
                  <p className="timeline__time mono">
                    <span className="accent">{String(i + 1).padStart(2, '0')}</span> · {step.time}
                  </p>
                  <h3 className="timeline__step-title">{step.title}</h3>
                  <p className="timeline__step-text">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
