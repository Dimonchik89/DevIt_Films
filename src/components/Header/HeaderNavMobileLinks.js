import React, {memo} from "react";
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { nanoid } from 'nanoid'

const pages = [
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
];;

const HeaderNavMobileLink = memo(({handleCloseNavMenu}) => {
    const links = pages.map((page) => (
        <MenuItem key={nanoid()} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page.page}</Typography>
        </MenuItem>
    ))
    return (
        <>
            {links}
        </>

    )
})
export default HeaderNavMobileLink;