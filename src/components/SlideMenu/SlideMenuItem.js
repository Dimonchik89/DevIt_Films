import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import "./slideMenu.scss";

const SlideMenuItem = ({page, num, expanded, name, handleChange, onClose}) => {
    const innerLinks = page?.menu.map(item => {
        return (
            <Link key={nanoid()} to={item.link} onClick={onClose}>
                {item.linkName}
            </Link>
        )
    })
    return (
        <Box className="slide-menu__wrapper">
            <Accordion expanded={expanded === name} onChange={handleChange(name)} className="slide-menu__item">
                <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
                    <Typography>{page.page}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{display: "flex", flexDirection: "column"}}>
                    {innerLinks}
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
export default SlideMenuItem;