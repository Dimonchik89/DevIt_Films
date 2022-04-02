import React, {memo} from "react";
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import { nanoid } from "nanoid";
import "./header.scss";

const HeaderSubMenu = memo(({menu}) => {
    const content = menu.map(({linkName, link}) => (
        <ListItem key={nanoid()}>
                <ListItemButton>
                    <Link to={link} className="header-sub__link">
                        <Typography
                            variant="h6"
                            component="h6"
                            color="primary"
                        >
                            {linkName}
                        </Typography>
                    </Link>
                </ListItemButton>
            </ListItem>
    ));

    return (
        <div className="header-sub__menu">
            <List>
                {content}
            </List>
        </div>

    )
})
export default HeaderSubMenu