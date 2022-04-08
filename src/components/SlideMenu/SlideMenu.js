import React, { memo, useState } from "react"
import Drawer from '@mui/material/Drawer';
import {pages} from "../Header/pages";
import SlideMenuItem from "./SlideMenuItem";
import { nanoid } from "nanoid";
import "./slideMenu.scss";

const SlideMenu = memo(({open, onClose}) => {
    const [expanded, setExpanded] = useState('Фильмы');

    const handleChange = (panel) => (newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    const content = pages.map((page, i) => <SlideMenuItem key={nanoid()} page={page} num={i} expanded={expanded} name={page.page} handleChange={handleChange} onClose={onClose}/>)
    return (
        <Drawer
            open={open}
            onClose={onClose}
            className="slide-menu"
        >
        {content}
      </Drawer>
    )
})
export default SlideMenu;