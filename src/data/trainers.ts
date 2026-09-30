/**
 * Тренеры и активные участники.
 *
 * ВНИМАНИЕ: имена и роли ниже — placeholder-структура.
 * Замените на реальных людей сообщества, когда данные подтверждены.
 *
 * Фотографии кладите в public/images/trainers/<id>.jpg
 * (пока используются генерируемые SVG-плейсхолдеры — см. src/components/Avatar).
 */

export interface Trainer {
  id: string;
  name: string;
  role: string;
  focus: string;
  /** Путь к реальному фото; если null — рисуется плейсхолдер */
  photo: string | null;
}

export const trainers: Trainer[] = [
  {
    id: 'trainer-1',
    name: 'Имя Фамилия',
    role: 'Тренер, TDD-практик',
    focus: 'Ведёт сессии, помогает командам замедлиться ради качества',
    photo: null,
  },
  {
    id: 'trainer-2',
    name: 'Имя Фамилия',
    role: 'Тренер, clean code',
    focus: 'Разбирает решения и спрашивает «а зачем тут ещё один слой?»',
    photo: null,
  },
  {
    id: 'trainer-3',
    name: 'Имя Фамилия',
    role: 'Фасилитатор',
    focus: 'Следит, чтобы ретроспектива была честной, а не вежливой',
    photo: null,
  },
  {
    id: 'trainer-4',
    name: 'Имя Фамилия',
    role: 'Тренер, архитектура',
    focus: 'Показывает, как границы модулей спасают нервные клетки',
    photo: null,
  },
  {
    id: 'trainer-5',
    name: 'Имя Фамилия',
    role: 'Участник со стажем',
    focus: 'Приходит на каждую встречу и всегда приносит идеи для ретро',
    photo: null,
  },
  {
    id: 'trainer-6',
    name: 'Имя Фамилия',
    role: 'Тренер, pair programming',
    focus: 'Учит договариваться за одним клавиатурным штурвалом',
    photo: null,
  },
];
