export const pages = [
    {page: "Фильмы", menu: [
        {linkName: "Популярные", link: "/movie/popular"},
        {linkName: "Сейчас смотрят", link: "/movie/now_playing"},
        {linkName: "Ожидаемые", link: "/movie/upcoming"},
        {linkName: "Лучшие", link: "/movie/top_rated"},
    ]},
    {page: "Сериалы", menu: [
        {linkName: "Популярные", link: "/tv/popular"},
        {linkName: "В эфире сегодня", link: "/tv/airing_today"},
        {linkName: "По телевидению", link: "/tv/on_the_air"},
        {linkName: "Лучшие", link: "/tv/top_rated"},
    ]},
    {page: "Люди", menu: [
        {linkName: "Популярные Люди", link: "/person"},
    ]},
    {page: "Еще", menu: [
        {linkName: "Обсуждения", link: ""},
        {linkName: "Доска почета", link: ""},
        {linkName: "Поддержка", link: ""},
        {linkName: "API", link: ""},
    ]},
];