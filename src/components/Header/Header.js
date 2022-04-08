import React from "react";
import Logo from "../Logo/Logo";
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HeaderNavLinks from "./HeaderNavLinks";
import HeaderAvatar from "./HeaderAvatar";
import HeaderMobileMenu from "./HeaderMobileMenu";

const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Logo/>
                    </Typography>
                    <HeaderMobileMenu/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Logo/>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <HeaderNavLinks/>
                    </Box>
                    <HeaderAvatar/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header;