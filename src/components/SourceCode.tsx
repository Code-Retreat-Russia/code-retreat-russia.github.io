import { ArrowUpRight } from "lucide-react";
import { Marquee } from "../animations/Marquee";
import { Reveal } from "../animations/Reveal";
import { sourceCode } from "../data/content";
import { socialLinks } from "../data/socialLinks";

/**
 * «Посмотреть, как это было»: фотоархив живёт в соцсетях,
 * поэтому секция — коллаж из плиток-ссылок + бегущая строка-напоминание.
 */
export function SourceCode() {
    return (
        <section className="section section--soft gallery" id="sourceCode">
            <div className="container">
                <div className="section-head section-head--split">
                    <div>
                        <p className="kicker">{sourceCode.kicker}</p>
                        <h2 className="display display--xl">
                            {sourceCode.title}
                        </h2>
                    </div>
                    <Reveal delay={0.1}>
                        <p className="lead">{sourceCode.lead}</p>
                    </Reveal>
                </div>

                <ul className="gallery__grid">
                    {socialLinks.map((link, i) => (
                        <Reveal
                            as="li"
                            key={link.id}
                            delay={(i % 2) * 0.08}
                            className={`gallery__cell gallery__cell--${i + 1}`}
                        >
                            <a
                                className="gallery__tile"
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${link.label} — ${link.hint} (откроется в новой вкладке)`}
                            >
                                <span className="gallery__tile-top mono">
                                    {link.label}
                                </span>
                                <span className="gallery__tile-hint">
                                    {link.hint}
                                </span>
                                <span
                                    className="gallery__tile-arrow"
                                    aria-hidden="true"
                                >
                                    <ArrowUpRight size={28} />
                                </span>
                            </a>
                        </Reveal>
                    ))}
                </ul>
            </div>

            <Marquee
                className="gallery__marquee"
                direction="right"
                duration={38}
            >
                {[
                    "как это было",
                    "лица",
                    "раунды",
                    "ретро",
                    "пары",
                    "код",
                    "чай",
                    "ноль строк кода осталось",
                ].map((word) => (
                    <span
                        className="gallery__marquee-word outline-text"
                        key={word}
                    >
                        {word}
                    </span>
                ))}
            </Marquee>
        </section>
    );
}
