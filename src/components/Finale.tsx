import { ArrowUpRight, Github } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "../animations/Reveal";
import { finale } from "../data/content";
import { socialLinks } from "../data/socialLinks";
import { asset } from "../utils/asset";

/**
 * Иконки кнопок сообщества: по id ссылки, чтобы данные оставались
 * чистыми от JSX. GitHub берём из lucide (общий набор иконок сайта),
 * Telegram — фирменный знак из public/images.
 */
const linkIcons: Record<string, ReactNode> = {
    telegram: (
        <img
            src={asset("images/technical-excellence-ru.png")}
            alt=""
            aria-hidden="true"
        />
    ),
    github: <Github size={34} aria-hidden="true" />,
};

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
                                        <span className="finale__link-icon">
                                            {linkIcons[link.id]}
                                        </span>
                                        {link.badge ? (
                                            <span className="finale__link-badge mono">
                                                {link.badge}
                                            </span>
                                        ) : null}
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
