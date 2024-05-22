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
    <div className="sidebar">
      {
        // Render Admin section only when expanded
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
              <Typography variant="h5" color={colors.grey[100]}>
                ADMIN
              </Typography>
            </MenuItem>
            <MenuItem>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlined />
              </IconButton>
            </MenuItem>
            {/* TODO: fix styling of profile pic and name */}
            {/* <MenuItem sx={{ mb: '25px' }}>
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={'../../assets/user.png'}
                style={{ cursor: 'pointer', borderRadius: '50%' }}
              />
              <Typography
                variant="h4"
                color={`${colors.grey[100]}`}
                fontWeight="bold"
                sx={{ m: '10px 0 0 0' }}
              >
                Smeet Kothari
              </Typography>
              <Typography variant="h5" color={`${colors.greenAccent[500]}`}>
                VP Admin
              </Typography>
            </MenuItem> */}

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
      }
    </div>
    // </Box>
  );
};

export default SideBarComp;
