import React from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

const HeaderAvatar = () => {
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User account">
                <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
        </Box>
    )
}
export default HeaderAvatar;