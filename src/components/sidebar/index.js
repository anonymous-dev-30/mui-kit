import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { token } from '../../theme';
import { HomeOutlined, MenuOutlined } from '@mui/icons-material';

const SideBarItems = ({ title, to, icon, selected, setSelected, colors }) => {
  return (
    <MenuItem
      active={title === selected}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} style={{ textDecoration: 'none' }} />
    </MenuItem>
  );
};

const SideBarComp = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  // TODO: change it true after style fix
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('DashBoard');

  return (
    // TODO: fix styles as per https://github.com/azouaoui-med/react-pro-sidebar/blob/master/storybook/Playground.tsx
    // <Box
    // 	sx={{
    // 		"& .pro-sidebar-inner": {
    // 			background: `${colors.primary[400]}`,
    // 		},
    // 		"& .pro-icon-wrapper": {
    // 			backgroundColor: 'transparent !important',
    // 		},
    // 		"& .pro-inner-item": {
    // 			padding: '5px 35px 5px 20px !important',
    // 		},
    // 		"& .pro-inner-item:hover": {
    // 			color: '#868dfb !important',
    // 		},
    // 		"& .pro-menu-item.active": {
    // 			color: '#6870fa !important',
    // 		},
    // 	}}
    // >
    <div className="sidebar">
      {!isCollapsed && ( // Render Admin section only when expanded
        <Sidebar collapsed={isCollapsed}>
          {/* <Box
							display='flex'
							justifyContent='space-between'
							alignItems='center'
							pl='15px'
							pr='15px'
							mb='10px'
						> */}
          <Menu iconShape="square">
            <MenuItem>
              <Typography variant="h3" color={colors.grey[100]}>
                ADMIN
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlined />
              </IconButton>
            </MenuItem>
            <MenuItem sx={{ mb: '25px' }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={'../../assets/user.png'}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={`${colors.grey[100]}`}
                  fontWeight="bold"
                  sx={{ m: '10px 0 0 0' }}
                >
                  Smeet Kothari
                </Typography>
                <Typography variant="h5" color={`${colors.greenAccent[500]}`}>
                  VP Admin
                </Typography>
              </Box>
            </MenuItem>
            <MenuItem>
              <SideBarItems
                title={'DashBoard'}
                to={'/'}
                icon={<HomeOutlined />}
                selected={selected}
                setSelected={setSelected}
                colors={colors}
              />
            </MenuItem>
          </Menu>
        </Sidebar>
      )}
    </div>
    // </Box>
  );
};

export default SideBarComp;
