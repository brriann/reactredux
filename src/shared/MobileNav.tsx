import React, { useEffect } from 'react';
import {
    Drawer,
    Toolbar,
    IconButton,
    ListItemText,
    ListItemIcon,
    ListItem,
    List,
    withStyles,
    withWidth,
    isWidthUp,
    Typography
} from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import { Link } from 'react-router-dom';

import { menuItem } from './types';

const styles = (theme: any) => ({
    closeIcon: {
        marginRight: theme.spacing(0.5)
    },
    headSection: {
        width: 200
    },
    blackList: {
        backgroundColor: theme.palette.common.black,
        height: "100%"
    },
    noDecoration: {
        textDecoration: "none !important"
    }
});

export interface IMobileNavProps {
    menuItems: menuItem[];
    anchor: any;
    open: any;
    onClose: any;
    classes?: any;
    width?: any;
    theme?: any;
};


const MobileNav: React.FC<IMobileNavProps> = (props: IMobileNavProps) => {

    const {
        menuItems,
        anchor,
        open,
        onClose,
        classes,
        width,
        theme
    } = props;

    useEffect(() => {
        window.onresize = () => {
            if (isWidthUp("sm", width) && open) {
                onClose();
            }
        };
    }, [width, open, onClose]);

    return (
        <Drawer variant="temporary" open={open} onClose={onClose} anchor={anchor}>
            <Toolbar>
                <ListItem
                    style={{
                        paddingTop: theme.spacing(0),
                        paddingBottom: theme.spacing(0),
                        height: "100%",
                        justifyContent: anchor === "left" ? "flex-start" : "flex-end"
                    }}
                    disableGutters
                >
                    <ListItemIcon className={classes.closeIcon}>
                        <IconButton onClick={onClose} aria-label="Close Navigation">
                            <CloseIcon color="primary" />
                        </IconButton>
                    </ListItemIcon>
                </ListItem>
            </Toolbar>
            <List className={classes.blackList}>
                {menuItems.map(elt => {
                    return (
                        <Link
                            key={elt.name}
                            to={elt.link}
                            onClick={onClose}
                            style={{ textDecoration: 'none' }}
                        >
                            <ListItem
                                button
                                disableRipple
                                disableTouchRipple
                            >
                                <ListItemText
                                    primary={
                                        <Typography variant="subtitle1" className="text-white">
                                            {elt.name}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </Link>
                    );
                })}
            </List>
        </Drawer>
    );
};

export default withWidth()(
    withStyles(styles, { withTheme: true })(MobileNav)
);