import React from 'react';
import { AppBar, Button, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import MobileNav from './MobileNav';

import { menuItem } from './types';

const menuItems: menuItem[] = [
    {
        link: "/",
        name: "Home"
    },
    {
        link: "/page1",
        name: "Page1"
    },
    {
        link: "/page2",
        name: "Page2"
    },
    {
        link: "/page3",
        name: "Page3"
    },
];


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export interface IHeaderProps {
    mobileDrawerOpen: boolean;
    handleMobileDrawerOpen: any;
    handleMobileDrawerClose: any;
};

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
    const {
        mobileDrawerOpen,
        handleMobileDrawerOpen,
        handleMobileDrawerClose
    } = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Hidden mdUp>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMobileDrawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Typography variant="h6" className={classes.title}>
                        bfostdev SPA
                </Typography>
                    <Hidden smDown>
                        {menuItems.map(elt => {
                            return (
                                <Link
                                    key={elt.name}
                                    to={elt.link}
                                    onClick={handleMobileDrawerClose}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button
                                        size="large"
                                    >
                                        {elt.name}
                                    </Button>
                                </Link>
                            );
                        })}
                    </Hidden>
                </Toolbar>
            </AppBar>
            <MobileNav 
                menuItems={menuItems}
                anchor="left"
                open={mobileDrawerOpen}
                onClose={handleMobileDrawerClose}
            />
        </div>
    );
};

export default Header;