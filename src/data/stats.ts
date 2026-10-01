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
    { value: "5+", label: "встреч" },
    { value: "200+", label: "разработчиков" },
    { value: "2+", label: "городов" },
    { value: "10+", label: "тренеров" },
    { value: "1000+", label: "часов кода в год" },
];
