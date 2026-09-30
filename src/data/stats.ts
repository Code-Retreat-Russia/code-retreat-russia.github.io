/**
 * Факты о сообществе.
 *
 * ВАЖНО: значения ниже — placeholder. Не публикуйте их как настоящие.
 * Замените на проверенные цифры (или удалите строку, если данных нет).
 */

export interface Stat {
  value: string;
  label: string;
}

export const communityStats: Stat[] = [
  { value: 'NN', label: 'встреч проведено' },
  { value: 'NNN', label: 'разработчиков прошли через сессии' },
  { value: 'N', label: 'городов, где мы собирались' },
  { value: 'N', label: 'тренеров ведут практики' },
  { value: 'NN', label: 'часов кода в год' },
];
