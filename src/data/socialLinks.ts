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
    hint: 'чат и анонсы встреч',
    // TODO: заменить на реальный канал сообщества
    url: 'https://t.me/code_retreat_russia',
  },
  {
    id: 'vk',
    label: 'ВКонтакте',
    hint: 'фотоальбомы мероприятий',
    // TODO: заменить на реальную группу
    url: 'https://vk.com/code_retreat_russia',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    hint: 'записи разборов',
    // TODO: заменить на реальный канал
    url: 'https://youtube.com/@code_retreat_russia',
  },
  {
    id: 'github',
    label: 'GitHub',
    hint: 'задачи для практик',
    // TODO: заменить на реальную организацию
    url: 'https://github.com/code-retreat-russia',
  },
];

export const externalLinks = {
  // Что такое code retreat в оригинальном формате
  coderetreat: 'https://coderetreat.org',
  // Соседнее сообщество, чей визуальный язык нам близок
  scrumRu: 'https://scrum.ru/code_retreat_2026',
} as const;
