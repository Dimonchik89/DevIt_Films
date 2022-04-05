import React, {memo} from "react";
import { Box, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import "../../../style/style.scss";

const FilmPageIntroFooter = memo(({film}) => {
    const company = film?.production_companies.map(item => (
        <Typography
            key={nanoid()}
            variant="h6"
            component="h6"
            sx={{marginRight: "1.5rem"}}
        >
            {item.name}
        </Typography>
    ))
    return (
        <>
            <Box>
                <Typography
                    variant="body1"
                    component="span"
                >
                    {film?.overview}
                </Typography>
            </Box>
            <Box className="flex">
                {company}
            </Box>
        </>
    )
})
export default FilmPageIntroFooter;