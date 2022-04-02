import React from "react";
import { Box } from "@mui/material";
import { nanoid } from "nanoid";
import "../Header/header.scss";
import NavLink from "../NavLink/NavLink";

const pagesSingleFilm = [
    {page: "Обзор", menu: [
        {linkName: "Основное", link: ""},
        {linkName: "Альтернативные названия", link: "titles"},
        {linkName: "Актеры и команда", link: "cast"},
        {linkName: "Дата выхода", link: "/movie/releases"},
        {linkName: "Переводы", link: "translations"},
    ]},
    {page: "Медиа", menu: [
        {linkName: "Фон", link: "images/backdrops"},
        {linkName: "Logos", link: "images/logos"},
        {linkName: "Постеры", link: "posters"},
        {linkName: "Видеоролики", link: "/tv/top_rated"},
    ]},
    {page: "Фандом", menu: [
        {linkName: "Популярные Люди", link: "/person"},
    ]},
    {page: "Поделиться", menu: [
        {linkName: "Обсуждения", link: ""},
        {linkName: "Доска почета", link: ""},
        {linkName: "Поддержка", link: ""},
        {linkName: "API", link: ""},
    ]},
];

const FilmPageNav = () => {
    const menu = pagesSingleFilm.map(page => <NavLink key={nanoid()} item={page} textStyle="find-link__style"/>)

    return (
        <Box className="film-page__nav">
            {menu}
        </Box>
    )
}
export default FilmPageNav;