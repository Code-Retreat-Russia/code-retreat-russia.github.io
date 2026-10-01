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
    label: 'Telegram',
    hint: 'сообщество Technical Excellence RU',
    url: 'https://t.me/technical_excellence_ru',
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
