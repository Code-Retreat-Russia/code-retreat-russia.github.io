import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { hero } from '../data/content';

/**
 * Hero: крупный set-заголовок в редакционной разбивке,
 * лёгкий параллакс декоративных слоёв и «терминальная» карточка-якорь.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const codeY = useTransform(scrollYProgress, [0, 1], ['0%', '-22%']);
  const ringY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__bg" aria-hidden="true">
        <motion.div className="hero__ring" style={reduced ? undefined : { y: ringY }} />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <motion.p
            className="hero__badge mono"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="hero__pulse" aria-hidden="true" />
            {hero.badge}
          </motion.p>

          <h1 className="hero__title display">
            {hero.titleLines.map((line, i) => (
              <span className="hero__line" key={line}>
                <motion.span
                  className="hero__line-inner"
                  initial={reduced ? false : { y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="hero__lead"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            {hero.lead}
          </motion.p>

          <motion.ul
            className="hero__meta"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {hero.meta.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </motion.ul>
        </div>

        <motion.div className="hero__code" style={reduced ? undefined : { y: codeY, opacity: fade }}>
          <div className="code-card" aria-hidden="true">
            <div className="code-card__bar">
              <span />
              <span />
              <span />
              <em>retreat.sh</em>
            </div>
            <pre>
              <code>
                <span className="tok-c"># суббота, 10:00</span>
                {'\n'}
                <span className="tok-k">while</span> (room.length) {'{'}
                {'\n'}  pair = meet(people)
                {'\n'}  <span className="tok-f">round</span>(kata, <span className="tok-n">60</span>)
                {'\n'}  discuss(pair)
                {'\n'}  delete(code) <span className="tok-c"># навсегда</span>
                {'\n'}{'}'}
                {'\n'}
                <span className="tok-c"># выход — навыки, не репозиторий</span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      <div className="hero__scroll mono" aria-hidden="true">
        <span className="hero__scroll-line" />
        scroll
      </div>
    </section>
  );
}
