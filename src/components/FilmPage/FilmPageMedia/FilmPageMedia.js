import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import FilmPageMediaItem from "./FilmPageMediaItem";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "../filmPage.scss";

const mediaTabsArr = [
    // {
    //     title: "Видеоролики",
    //     id: 0,
    //     url: "/videos",
    //     objectKey: "results",
    //     src: "https://www.youtube.com/embed"
    // },
    {
        title: "Заставка",
        id: 0,
        url: "/images",
        objectKey: "backdrops",
        src: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2"
    },
    {
        title: "Постеры",
        id: 1,
        url: "/images",
        objectKey: "posters",
        src: "https://www.themoviedb.org/t/p/w220_and_h330_face"
    }
]

const FilmPageMedia = () => {
    const { pathname } = useLocation();
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    const tabs = mediaTabsArr.map(item => <Tab key={nanoid()} label={item.title} {...a11yProps(item.id)} />)
    const tabsContent = mediaTabsArr.map(item => (
        <CSSTransition key={nanoid()} timeout={500} classNames="item" unmountOnExit mountOnEnter appear>
            <FilmPageMediaItem
                key={nanoid()}
                value={value}
                index={item.id}
                pathname={pathname}
                url={item.url}
                objectKey={item.objectKey}
                src={item.src}/>
        </CSSTransition>)
    )

    return (
        <Box className="film-page__media">
            <Box sx={{mb: "1rem"}}>
                <Typography
                    variant="h4"
                    component="h4"
                >
                    Медиа
                </Typography>
            </Box>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {tabs}
                </Tabs>
            </Box>
            <TransitionGroup>
                {tabsContent}
            </TransitionGroup>
        </Box>
    )
}
export default FilmPageMedia;