import React, {memo} from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

const CategoryPageFilterItem = memo(({num, title, text, name, expanded, handleChange}) => {
    return (
        <>
            <Accordion expanded={expanded === name} onChange={handleChange(name)}>
                <AccordionSummary aria-controls={`panel${num}d-content`} id={`panel${num}d-header`}>
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {text}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
})
export default CategoryPageFilterItem;