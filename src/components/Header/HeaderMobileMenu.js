import React, { useCallback, useState } from "react";
import { Box, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SlideMenu from "../SlideMenu/SlideMenu";

const HeaderMobileMenu = () => {
    const [anchorElNav, setAnchorElNav] = useState(false);
    const handleOpenNavMenu = useCallback(() => {
      setAnchorElNav(true);
    }, [anchorElNav]);
    const handleCloseNavMenu = useCallback(() => {
      setAnchorElNav(false);
    }, [anchorElNav]);
    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon/>
                </IconButton>
                <SlideMenu open={anchorElNav} onClose={handleCloseNavMenu}/>
            </Box>
        </>
    )
}
export default HeaderMobileMenu;