/**
 * Единая точка правды про внешние ссылки сообщества.
 * ЗАМЕНИТЕ placeholder-ссылки на реальные URL групп/публикаций.
 */

export interface SocialLink {
  id: string;
  label: string;
  hint: string;
  url: string;
  /** Небольшой счётчик-«бабл» на кнопке (например, число участников). */
  badge?: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'telegram',
    label: 'Cообщество',
    hint: 'Technical Excellence RU',
    url: 'https://t.me/technicalexcellenceru',
    badge: '500+ участников',
  },
  {
    id: 'github',
    label: 'GitHub',
    hint: 'шаблоны репозиториев',
    url: 'https://github.com/code-retreat-russia',
    badge: 'new',
  },
];

export const externalLinks = {
  codeRetreat: 'https://coderetreat.org',
  scrumRu: 'https://scrum.ru/',
} as const;
