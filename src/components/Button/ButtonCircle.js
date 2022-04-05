import React, {memo} from "react";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import "./button.scss";
import { Box } from "@mui/material";

const ButtonCircle = memo(({title, Icon, color, film, handleAdd}) => {
    return (
        <Box className="button-wrapper">
            <Tooltip title={title}>
                <Box className="button__circle">
                    <IconButton onClick={() => handleAdd(film)}>
                        <Icon fontSize="small" color={color}/>
                    </IconButton>
                </Box>
            </Tooltip>
        </Box>
    )
})
export default ButtonCircle;