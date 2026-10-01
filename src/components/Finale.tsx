import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../animations/Reveal";
import { finale } from "../data/content";
import { socialLinks } from "../data/socialLinks";

/**
 * Финальный блок: без формы и без «купите».
 * Только фраза-обещание и ссылки туда, где живёт сообщество.
 */
export function Finale() {
    return (
        <section className="section finale" id="finale">
            <div className="container">
                <div className="finale__inner">
                    <Reveal>
                        <h2 className="finale__title display">
                            {finale.title}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <div>
                            <img src="./images/final-logo.png" />
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="lead finale__lead">{finale.lead}</p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <ul className="finale__links">
                            {socialLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        className="finale__link"
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="finale__link-label">
                                            {link.label}
                                        </span>
                                        <span className="finale__link-hint mono">
                                            {link.hint}
                                        </span>
                                        <ArrowUpRight
                                            size={20}
                                            aria-hidden="true"
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
