import React from "react";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import "./button.scss";
import { Box } from "@mui/material";

const ButtonCircle = ({title, Icon, color}) => {
    return (
        <Box className="button-wrapper">
            <Tooltip title={title}>
                <Box className="button__circle">
                    <IconButton>
                        <Icon fontSize="small" color={color}/>
                    </IconButton>
                </Box>
            </Tooltip>
        </Box>
    )
}
export default ButtonCircle;