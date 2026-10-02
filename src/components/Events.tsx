import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Camera } from "lucide-react";
import { events } from "../data/events";
import { Reveal } from "../animations/Reveal";

/**
 * Хроника мероприятий: горизонтальный carousel на Embla.
 * Drag мышью и пальцем, клавиатура (стрелки на контейнере),
 * прогресс-полоса вместо скучных точек.
 */
export function Events() {
    const [emblaRef, embla] = useEmblaCarousel({
        align: "start",
        containScroll: "trimSnaps",
        dragFree: true,
    });
    const [selected, setSelected] = useState(0);
    const [snaps, setSnaps] = useState<number[]>([]);
    const [progress, setProgress] = useState(0);
    const [thumbPct, setThumbPct] = useState(100);

    useEffect(() => {
        if (!embla) return;
        const onSelect = () => {
            setSelected(embla.selectedScrollSnap());
            setProgress(embla.scrollProgress());
        };
        setSnaps(embla.scrollSnapList());
        setThumbPct(100 / Math.max(embla.scrollSnapList().length, 1));
        onSelect();
        embla.on("select", onSelect);
        embla.on("reInit", onSelect);
        return () => {
            embla.off("select", onSelect);
            embla.off("reInit", onSelect);
        };
    }, [embla]);

    const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowRight") {
            e.preventDefault();
            scrollNext();
        }
        if (e.key === "ArrowLeft") {
            e.preventDefault();
            scrollPrev();
        }
    };

    return (
        <section className="section events" id="events">
            <div className="container">
                <div className="section-head section-head--split">
                    <div>
                        <p className="kicker">06 — атмосфера</p>
                        <h2 className="display display--xl">
                            Где и как мы собирались
                        </h2>
                    </div>
                    <Reveal delay={0.1}>
                        <p className="lead">
                            Офлайн-площадки, онлайн-вечера и выездные форматы.
                            Листайте вбок — карточки тянутся мышью и пальцем.
                        </p>
                    </Reveal>
                </div>
            </div>

            <div className="events__carousel" onKeyDown={onKeyDown}>
                <div
                    className="events__viewport"
                    ref={emblaRef}
                    tabIndex={0}
                    aria-label="Прошедшие мероприятия, карусель"
                >
                    <div className="events__track">
                        {events.map((ev) => (
                            <article className="event-card" key={ev.id}>
                                <div className="event-card__media">
                                    {ev.cover ? (
                                        <img
                                            src={ev.cover}
                                            alt={`Фотографии: ${ev.title}`}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    ) : (
                                        <div
                                            className="event-card__placeholder"
                                            role="img"
                                            aria-label={`Обложка: ${ev.title}`}
                                        >
                                            <Camera
                                                size={40}
                                                aria-hidden="true"
                                            />
                                            <span className="mono">
                                                {ev.year}
                                            </span>
                                        </div>
                                    )}
                                    <span className="event-card__year mono">
                                        {ev.year}
                                    </span>
                                </div>

                                <div className="event-card__body">
                                    <p className="event-card__city mono">
                                        {ev.city}
                                    </p>
                                    <h3 className="event-card__title">
                                        {ev.title}
                                    </h3>
                                    <p className="event-card__text">
                                        {ev.description}
                                    </p>

                                    <div className="event-card__links">
                                        {ev.photosUrl && (
                                            <a
                                                className="link-arrow"
                                                href={ev.photosUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Фотографии{" "}
                                                <ArrowRight
                                                    size={16}
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        )}
                                        {ev.extraUrl && (
                                            <a
                                                className="link-arrow"
                                                href={ev.extraUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {ev.extraLabel ?? "Подробнее"}{" "}
                                                <ArrowRight
                                                    size={16}
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container events__controls">
                <div className="events__progress" aria-hidden="true">
                    <span
                        className="events__progress-thumb"
                        style={{
                            left: `${progress * (100 - thumbPct)}%`,
                            width: `${thumbPct}%`,
                        }}
                    />
                </div>

                <div className="events__nav">
                    <span className="events__counter mono" aria-live="polite">
                        {String(selected + 1).padStart(2, "0")} /{" "}
                        {String(snaps.length || events.length).padStart(2, "0")}
                    </span>
                    <div className="events__buttons">
                        <button
                            className="events__btn"
                            onClick={scrollPrev}
                            aria-label="Предыдущее мероприятие"
                        >
                            <ArrowLeft size={20} aria-hidden="true" />
                        </button>
                        <button
                            className="events__btn"
                            onClick={scrollNext}
                            aria-label="Следующее мероприятие"
                        >
                            <ArrowRight size={20} aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
