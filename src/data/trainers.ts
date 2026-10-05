/**
 * Путь к файлу из public/ относительно корня сайта.
 *
 * В данных храним путь без ведущего слэша ('images/trainers/x.jpg'), потому что
 * сборка живёт и на github.io, и на собственном домене (base: './' в vite.config.ts).
 * Жёсткий '/images/...' сломался бы при размещении в подкаталоге.
 */
import { asset } from "../utils/asset";

export interface Trainer {
    id: string;
    name: string;
    role: string;
    /** Необязательное уточнение к роли — только если оно подтверждено источником */
    focus?: string;
    /** Путь к реальному фото; если null — рисуется плейсхолдер */
    photo: string | null;
}

export const trainers: Trainer[] = [
    {
        id: "sergey-lobin",
        name: "Сергей Лобин",
        role: "Тренер по Скраму и инженерке, scrum.ru",
        photo: asset("images/trainers/sergey-lobin.jpg"),
    },
    {
        id: "svetlana-krivenko",
        name: "Светлана Кривенко",
        role: "Тренер по инженерным практикам",
        photo: asset("images/trainers/svetlana-krivenko.jpg"),
    },
    {
        id: "andrey-marschantsev",
        name: "Андрей Маршанцев",
        role: "Тех лид, МТС-банк",
        photo: asset("images/trainers/andrey-marschantsev.jpg"),
    },
    {
        id: "artem-krotov",
        name: "Артем Кротов",
        role: "Developer & Scrum Master",
        photo: asset("images/trainers/artem-krotov.jpg"),
    },
    {
        id: "zlata-zanina",
        name: "Злата Занина",
        role: "Engineering manager",
        photo: asset("images/trainers/zlata-zanina.jpg"),
    },
    {
        id: "anna-korotkova",
        name: "Анна Короткова",
        role: "Java/Kotlin Developer",
        photo: asset("images/trainers/anna-korotkova.jpg"),
    },
    {
        id: "julia-fatkullina",
        name: "Юлия Фаткуллина",
        role: "Senior .NET/Kotlin Developer",
        photo: asset("images/trainers/julia-fatkullina.jpg"),
    },
    {
        id: "ilya-ilynykh",
        name: "Илья Ильиных",
        role: "Go-разработчик (ex-java)",
        photo: asset("images/trainers/ilya-ilynykh.jpg"),
    },
    {
        id: "nikita-chursin",
        name: "Никита Чурсин",
        role: "Разработчик, тренер по TDD",
        photo: asset("images/trainers/nikita-chursin.jpg"),
    },
    {
        id: "ekaterina-cherepanova",
        name: "Екатерина Черепанова",
        role: "Senior Java/Kotlin Developer",
        photo: asset("images/trainers/ekaterina-cherepanova.jpg"),
    },
];
