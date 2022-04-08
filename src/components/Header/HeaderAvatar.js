import React from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { useChangeActive } from "../../hooks/useChange";
import { Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const settings = [{title: "Favorite", link: "/favorite"}];

const HeaderAvatar = () => {
    const {activeBtn, handleChangeActiveButton} = useChangeActive(null);
    const userMenu = settings.map((setting) => (
        <MenuItem key={setting.title} onClick={() => handleChangeActiveButton(null)}>
            <Link to={setting.link}>
                <Typography textAlign="center">{setting.title}</Typography>
            </Link>
        </MenuItem>
    ))
    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="User account">
                    <IconButton onClick={(e) => handleChangeActiveButton(e.currentTarget)} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={activeBtn}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={!!activeBtn}
                onClose={() => handleChangeActiveButton(null)}
            >
                {userMenu}
            </Menu>
        </>

    )
}
export default HeaderAvatar;