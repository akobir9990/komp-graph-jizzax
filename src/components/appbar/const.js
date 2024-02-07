import {
  ABOUT_PAGE,
  AUTHOR_PAGE,
  LECTURES_PAGE,
  PRACTICE_PAGE,
  PRESENTATION_PAGE,
  TASK_PAGE,
  TUTORIAL_PAGE,
  VIDEOS_PAGE,
} from "../../router/const";
export const pages = [
  { id: 1, name: "O'quv qo'llanma", path: TUTORIAL_PAGE },
  { id: 2, name: "Ma'ruzalar matni", path: LECTURES_PAGE },
  { id: 3, name: "Taqdimotlar", path: PRESENTATION_PAGE },
  { id: 4, name: "Videolar", path: VIDEOS_PAGE },
  { id: 5, name: "Amaliyotlar", path: PRACTICE_PAGE },
  { id: 6, name: "Savollar", path: TASK_PAGE },
];
export const settings = [
  { id: 1, name: "Muallif haqida", path: AUTHOR_PAGE },
  { id: 2, name: "Dastur haqida", path: ABOUT_PAGE },
];
