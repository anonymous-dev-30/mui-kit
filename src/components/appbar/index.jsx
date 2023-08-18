import React, {useContext} from 'react';

import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import { ColorModeContext, token } from '../../theme';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';

const TopBar = () => {
  
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <navigation>
      <Box
        display="flex"
        justifyContent="space-between"
        p={2}  
      >
        {/* SEARCH BAR START */}
        <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
          <InputBase sx={{ml:2, flex: 1}} placeholder='Search'  />
          <IconButton type='button' xs={{ p:1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
        {/* SEARCH BAR START */}

        {/* ICONS START */}
          <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
              { theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon /> }
            </IconButton>
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
              <PersonOutlineOutlinedIcon />
            </IconButton>
          </Box>
        {/* ICONS END */}
      </Box>
    </navigation>
  )
}

export default TopBar;