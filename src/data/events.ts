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
    id: 'event-2025-moscow',
    year: '2025',
    title: 'Зимний код-ретрит',
    description:
      'Три раунда TDD на «Играх в жизнь», ротация пар каждые 25 минут и очень долгий разговор про имена функций.',
    city: 'Москва',
    // TODO: заменить на реальный фотоальбом
    photosUrl: 'https://vk.com/album-000000000_000000000',
  },
  {
    id: 'event-2025-spb',
    year: '2025',
    title: 'Осенние сессии',
    description:
      'Gilded Kata в парах. К вечеру в комнате осталось ноль вложенных if — и один общий принцип: тесты сначала.',
    city: 'Санкт-Петербург',
    photosUrl: 'https://vk.com/album-000000000_000000001',
    extraUrl: 'https://t.me/000000',
    extraLabel: 'Отчёт в Telegram',
  },
  {
    id: 'event-2024-moscow',
    year: '2024',
    title: 'Летний практикум',
    description:
      'Первая публичная встреча формата: конвейер пар, раунды без мыши и разбор «что вообще произошло».',
    city: 'Москва',
    photosUrl: 'https://vk.com/album-000000000_000000002',
  },
  {
    id: 'event-2024-online',
    year: '2024',
    title: 'Онлайн-марафон парного программирования',
    description:
      'Эксперимент на дистанции: шесть команд, общий репозиторий и ретроспектива, которая длилась дольше сессий.',
    city: 'Онлайн',
    photosUrl: 'https://t.me/000001',
  },
  {
    id: 'event-2023-kazan',
    year: '2023',
    title: 'Выездная практика',
    description:
      'Формат выходного дня: код, прогулки и обсуждения архитектуры у костра. Отсюда пошла наша традиция финального круга.',
    city: 'Казань',
    photosUrl: 'https://vk.com/album-000000000_000000003',
  },
];
