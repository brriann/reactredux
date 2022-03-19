import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  useTheme,
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

import React, { useEffect, useState } from 'react';
import { useLayoutState } from '../../context/LayoutContext';

const navItems = [
  {
    id: 1,
    label: 'Page1',
    link: '/some/route1',
    icon: <LinkIcon />,
  },
  {
    id: 2,
    label: 'Page2',
    link: '/some/route2',
    icon: <LinkIcon />,
  },
  {
    id: 3,
    label: 'Page3',
    link: '/some/route3',
    icon: <LinkIcon />,
  },
  {
    id: 4,
    label: 'Page4',
    link: '/some/route3',
    icon: <LinkIcon />,
  },
];

const SideNav: React.FunctionComponent = () => {
  const theme = useTheme();
  const { isSidebarOpened } = useLayoutState();

  const [isPermanent, setIsPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener('resize', handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener('resize', handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? 'permanent' : 'temporary'}
      open={isSidebarOpened}
    >
      <List sx={{ marginTop: '75px' }}>
        {navItems.map((ni) => (
          <ListItem
            key={ni.id}
            onClick={() => console.log(ni.link)}
            sx={{
              marginBottom: '15px',
              cursor: 'pointer',
            }}
          >
            <ListItemIcon>{ni.icon}</ListItemIcon>
            {isSidebarOpened && <ListItemText>{ni.label}</ListItemText>}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  function handleWindowWidthChange() {
    const windowWidth = window.innerWidth;
    const breakpointWidth = theme.breakpoints.values.md;
    const isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setIsPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setIsPermanent(true);
    }
  }
};

export default SideNav;
