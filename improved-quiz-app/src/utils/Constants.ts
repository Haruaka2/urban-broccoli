import { Category } from "../types/ApiTypes";

export enum AppViewEnum {
    QUIZ = "QUIZ",
    SELECTION = "SELECTION",
    RESULT = "RESULT"
}

export const ANY_CAT: Category = {
    id: 0,
    label: "Any Category"
};
export const GEN_CAT: Category = {
    id: 9,
    label: "General Knowledge"
};
export const BOOK_CAT: Category = {
    id: 10,
    label: "Entertainment: Books"
};
export const FILM_CAT: Category = {
    id: 11,
    label: "Entertainment: Film"
};
export const MUSIC_CAT: Category = {
    id: 12,
    label: "Entertainment: Music"
};
export const THEATRE_CAT: Category = {
    id: 13,
    label: "Entertainment: Musicals & Theatres"
};
export const TV_CAT: Category = {
    id: 14,
    label: "Entertainment: Television"
};
export const VG_CAT: Category = {
    id: 15,
    label: "Entertainment: Video Games"
};
export const BG_CAT: Category = {
    id: 16,
    label: "Entertainment: Board Games"
};
export const COMIC_CAT: Category = {
    id: 29,
    label: "Entertainment: Comics"
};
export const MANGA_CAT: Category = {
    id: 31,
    label: "Entertainment: Japanese Anime & Manga"
};
export const CARTOON_CAT: Category = {
    id: 32,
    label: "Entertainment: Cartons & Animations"
};

export const NATURE_CAT: Category = {
    id: 17,
    label: "Science: Nature"
};
export const CP_CAT: Category = {
    id: 18,
    label: "Science: Computer"
};
export const MATH_CAT: Category = {
    id: 19,
    label: "Science: Mathematics"
};
export const GADGETS_CAT: Category = {
    id: 30,
    label: "Science: Gadgets"
};
export const MYTH_CAT: Category = {
    id: 20,
    label: "Mythology"
};
export const SPORTS_CAT: Category = {
    id: 21,
    label: "Sports"
};
export const GEO_CAT: Category = {
    id: 22,
    label: "Geography"
};
export const HIST_CAT: Category = {
    id: 23,
    label: "History"
};
export const POLI_CAT: Category = {
    id: 24,
    label: "Politics"
};
export const ART_CAT: Category = {
    id: 25,
    label: "Art"
};
export const CELEB_CAT: Category = {
    id: 26,
    label: "Celebrities"
};
export const ANIMAL_CAT: Category = {
    id: 27,
    label: "Animals"
};
export const VECH_CAT: Category = {
    id: 28,
    label: "Vehicles"
};

export const Q_CATEGORIES: Category[] = [
    ANY_CAT,
    GEN_CAT,
    BOOK_CAT,
    FILM_CAT,
    MUSIC_CAT,
    THEATRE_CAT,
    TV_CAT,
    VG_CAT,
    BG_CAT,
    COMIC_CAT,
    MANGA_CAT,
    CARTOON_CAT,
    NATURE_CAT,
    CP_CAT,
    MATH_CAT,
    GADGETS_CAT,
    MYTH_CAT,
    SPORTS_CAT,
    GEO_CAT,
    HIST_CAT,
    POLI_CAT,
    ART_CAT,
    CELEB_CAT,
    VECH_CAT
];