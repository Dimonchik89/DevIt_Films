import React, {memo} from "react";
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { nanoid } from 'nanoid'
import { pages } from "./pages";

const HeaderNavMobileLink = memo(({handleCloseNavMenu}) => {
    const links = pages.map((page) => (
        <MenuItem key={nanoid()} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page.page}</Typography>
        </MenuItem>
    ))
    return (
        <>
            {links}
        </>

    )
})
export default HeaderNavMobileLink;