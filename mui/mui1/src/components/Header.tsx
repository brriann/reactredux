import React, { useState } from 'react';

import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  ListItemIcon,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import { messages, notifications } from '../data/stub';

const profileMenuId = 'profile-account-menu';
const messagesMenuId = 'messsages-account-menu';
const notificationsMenuId = 'notifications-account-menu';

const Header: React.FunctionComponent = () => {
  const [anchorElProfileMenu, setAnchorElProfileMenu] =
    useState<HTMLElement | null>(null);
  const [anchorElMessagesMenu, setAnchorElMessagesMenu] =
    useState<HTMLElement | null>(null);
  const [anchorElNotificationsMenu, setAnchorElNotificationsMenu] =
    useState<HTMLElement | null>(null);

  const isProfileMenuOpen = Boolean(anchorElProfileMenu);
  const isMessagesMenuOpen = Boolean(anchorElMessagesMenu);
  const isNotificationsMenuOpen = Boolean(anchorElNotificationsMenu);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    handleMessagesMenuClose();
    handleNotificationsMenuClose();
    setAnchorElProfileMenu(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorElProfileMenu(null);
  };

  const handleMessagesMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    handleProfileMenuClose();
    handleNotificationsMenuClose();
    setAnchorElMessagesMenu(event.currentTarget);
  };

  const handleMessagesMenuClose = () => {
    setAnchorElMessagesMenu(null);
  };

  const handleNotificationsMenuOpen = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    handleProfileMenuClose();
    handleMessagesMenuClose();
    setAnchorElNotificationsMenu(event.currentTarget);
  };

  const handleNotificationsMenuClose = () => {
    setAnchorElNotificationsMenu(null);
  };

  const renderProfileMenu = (
    <Menu
      anchorEl={anchorElProfileMenu}
      id={profileMenuId}
      keepMounted
      open={isProfileMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuClose}>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>
        <ListItemIcon>
          <ManageAccountsIcon />
        </ListItemIcon>
        Account + Billing
      </MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        App Settings
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleProfileMenuClose}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Sign out
      </MenuItem>
    </Menu>
  );

  const renderMessagesMenu = (
    <Menu
      anchorEl={anchorElMessagesMenu}
      id={messagesMenuId}
      keepMounted
      open={isMessagesMenuOpen}
      onClose={handleMessagesMenuClose}
    >
      {messages.map((m) => (
        <MenuItem key={m.id} onClick={handleMessagesMenuClose}>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          {m.subject}
        </MenuItem>
      ))}
    </Menu>
  );

  const renderNotificationsMenu = (
    <Menu
      anchorEl={anchorElNotificationsMenu}
      id={notificationsMenuId}
      keepMounted
      open={isNotificationsMenuOpen}
      onClose={handleNotificationsMenuClose}
    >
      {notifications.map((n) => (
        <MenuItem key={n.id} onClick={handleNotificationsMenuClose}>
          <ListItemIcon>
            <CircleNotificationsIcon />
          </ListItemIcon>
          {n.title}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block' } }}
          >
            mui1 app
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex' } }}>
            <Tooltip title="Messages">
              <IconButton
                size="large"
                aria-label="show 4 new messages"
                aria-controls={messagesMenuId}
                aria-haspopup="true"
                onClick={handleMessagesMenuOpen}
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                aria-controls={notificationsMenuId}
                aria-haspopup="true"
                onClick={handleNotificationsMenuOpen}
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Account / Settings">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={profileMenuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      {renderProfileMenu}
      {renderMessagesMenu}
      {renderNotificationsMenu}
    </Box>
  );
};

export default Header;
