/**
 * Единая точка правды про внешние ссылки сообщества.
 * ЗАМЕНИТЕ placeholder-ссылки на реальные URL групп/публикаций.
 */

export interface SocialLink {
  id: string;
  label: string;
  hint: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'telegram',
    label: 'Telegram (500+ участников)',
    hint: 'сообщество Technical Excellence RU',
    url: 'https://t.me/technicalexcellenceru',
  },
  {
    id: 'github',
    label: 'GitHub',
    hint: 'шаблоны репозиториев',
    url: 'https://github.com/code-retreat-russia',
  },
];

export const externalLinks = {
  codeRetreat: 'https://coderetreat.org',
  scrumRu: 'https://scrum.ru/',
} as const;
