import { type CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "../animations/Marquee";
import { Reveal } from "../animations/Reveal";
import { sourceCode } from "../data/content";
import { languageCards, orgUrl } from "../data/languageCards";

/**
 * «Код»: шаблоны проектов для Coding Dojo по языкам.
 *
 * Иконка бесцветная, пока на карточку не навелись — тогда она и рамка
 * заливаются фирменным цветом языка (он приходит в --lang-color).
 * Так сетка читается как один монохромный ряд, а цвет становится
 * реакцией на действие пользователя, а не шумом.
 */
export function SourceCode() {
    return (
        <section className="section section--soft langs" id="sourceCode">
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

                <ul className="langs__grid">
                    {languageCards.map((card, i) => (
                        <Reveal
                            as="li"
                            key={card.id}
                            delay={(i % 5) * 0.06}
                            y={20}
                            className="langs__cell"
                        >
                            <a
                                className="lang-card"
                                href={card.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={
                                    {
                                        "--lang-color": card.color,
                                    } as CSSProperties
                                }
                                aria-label={`${card.label}: ${card.repo} на GitHub (откроется в новой вкладке)`}
                            >
                                <span
                                    className="lang-card__icon"
                                    aria-hidden="true"
                                >
                                    <svg
                                        viewBox={card.viewBox}
                                        focusable="false"
                                    >
                                        <path d={card.path} />
                                    </svg>
                                </span>

                                <span className="lang-card__label">
                                    {card.label}
                                </span>
                                <span className="lang-card__repo mono">
                                    {card.repo}
                                </span>

                                <span
                                    className="lang-card__arrow"
                                    aria-hidden="true"
                                >
                                    <ArrowUpRight size={20} />
                                </span>
                            </a>
                        </Reveal>
                    ))}
                </ul>

                <Reveal delay={0.1}>
                    <a
                        className="link-arrow langs__all"
                        href={orgUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Все репозитории{" "}
                        <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                </Reveal>
            </div>

            <Marquee className="langs__marquee" direction="right" duration={38}>
                {[
                    "game of life",
                    "gilded kata",
                    "ping-pong pairs",
                    "red-green-refactor",
                    "12 раундов",
                    "код удалится",
                ].map((word) => (
                    <span
                        className="langs__marquee-word outline-text"
                        key={word}
                    >
                        {word}
                    </span>
                ))}
            </Marquee>
        </section>
    );
}
