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
    photosUrl: string;
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
        photosUrl: "https://vk.ru/techozon?z=album-209665992_311475145",
        cover: "images/events/2026-spb.jpg",
    },
    {
        id: "2026-moscow",
        year: "2026",
        title: "Зимний код-ретрит",
        description:
            "Три раунда TDD на «Играх в жизнь», ротация пар каждые 60 минут и очень долгий разговор про имена функций.",
        city: "МТС Банк, Москва",
        // TODO: заменить на реальный фотоальбом
        photosUrl: "https://vk.com/album-000000000_000000000",
        cover: "images/events/2026-moscow.jpg",
    },
    {
        id: "2025-online",
        year: "2025",
        title: "Онлайн-марафон парного программирования",
        description:
            "Эксперимент на дистанции: шесть команд, общий репозиторий и ретроспектива, которая длилась дольше сессий.",
        city: "Онлайн",
        photosUrl: "https://vk.com/album-000000000_000000002",
        cover: "images/events/2025-online.jpg",
    },
    {
        id: "2025-moscow",
        year: "2025",
        title: "Зимний код-ретрит",
        description:
            "Первая публичная встреча формата: конвейер пар, раунды без мыши и разбор «что вообще произошло».",
        city: "Лемана Тех, Москва",
        photosUrl: "https://vk.com/album-000000000_000000002",
        cover: "images/events/2025-moscow.jpg",
    },
    {
        id: "2023-moscow",
        year: "2023",
        title: "Осення встреча на высоте",
        description:
            "Формат выходного дня: код, код, обсуждения архитектуры и обещение на высоте 23 этажа",
        city: "Т1, Москва",
        photosUrl: "https://vk.com/album-000000000_000000002",
        cover: "images/events/2023-moscow.jpg",
    },
];
