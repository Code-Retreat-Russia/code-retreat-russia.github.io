/**
 * История мероприятий Code Retreat Russia.
 *
 * ВНИМАНИЕ: это placeholder-данные, описывающие типовой формат встреч.
 * Замените годы, города и ссылки на реальные — структура рассчитана на это.
 *
 * Обложки кладите в public/images/events/<id>.jpg
 */

export interface CommunityEvent {
    id: string;
    year: string;
    title: string;
    description: string;
    city: string;
    /** Ссылка на фотоальбом (соцсети) */
    photosUrl?: string;
    /** Путь к обложке; если null — рисуется графический плейсхолдер */
    cover?: string | null;
    extraUrl?: string;
    extraLabel?: string;
}

export const events: CommunityEvent[] = [
    {
        id: "2026-spb",
        year: "2026",
        title: "Ретрит на берегу моря",
        description:
            "Gilded Kata в парах. К вечеру в комнате осталось ноль вложенных if — и один общий принцип: тесты сначала.",
        city: "Ozon Tech, Санкт-Петербург",
        cover: "images/events/2026-spb.jpg",
        photosUrl: "https://vk.ru/techozon?z=album-209665992_311475145",
        extraUrl: "https://t.me/ozon_tech/s/133",
        extraLabel: "История в TG"
    },
    {
        id: "2026-moscow-mts",
        year: "2026",
        title: "Зимний код ретрит",
        description:
            "Три раунда TDD на «Играх в жизнь», ротация пар каждые 60 минут и очень долгий разговор про имена функций.",
        city: "МТС Банк, Москва",
        cover: "images/events/2026-moscow-mts.jpg",
    },
    {
        id: "2025-online",
        year: "2025",
        title: "Онлайн-марафон парного программирования",
        description:
            "Эксперимент на дистанции: шесть команд, общий репозиторий и ретроспектива, которая длилась дольше сессий.",
        city: "Онлайн",
        cover: "images/events/2025-online.jpg",
    },
    {
        id: "2025-moscow",
        year: "2025",
        title: "Старый новый код",
        description: "Стартуем год с правильных практик",
        city: "Лемана Тех, Москва",
        cover: "images/events/2025-moscow.jpg",
        extraUrl: "https://www.youtube.com/watch?v=s6J9YnomDI0",
        extraLabel: "YouTube",
    },
    {
        id: "2023-moscow-t1",
        year: "2023",
        title: "Осенняя встреча на высоте",
        description:
            "Формат выходного дня: код, код, обсуждения архитектуры и общение на высоте 23 этажа",
        city: "Т1, Москва",
        cover: "images/events/2023-moscow-t1.jpg",
        extraUrl: "https://t.me/T1Holding/1225",
        extraLabel: "Пост в TG",
    },
    {
        id: "2023-moscow-avito",
        year: "2023",
        title: "Февральский митап",
        description:
            "Первая публичная встреча формата: конвейер пар, раунды без мыши и разбор «что вообще произошло».",
        city: "Avito, Москва",
        cover: "images/events/2023-moscow-avito.jpg",
        photosUrl: "https://vk.ru/album-152990965_291394522",
        extraUrl: "https://www.youtube.com/watch?v=ZUNi_IcaVIg",
        extraLabel: "YouTube",
    },
];
