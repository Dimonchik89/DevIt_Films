import React, {memo} from "react";
import { Typography } from "@mui/material";
import ButtonGroup from "../Button/ButtonGroup";
import "./main.scss";

const MainTitle = memo(({title}) => {
    return (
        <div className="main-title">
            <Typography
                variant="h4"
                component="h4"
                className="medium"
            >
                {title}
            </Typography>
            <ButtonGroup/>
        </div>
    )
})
export default MainTitle;