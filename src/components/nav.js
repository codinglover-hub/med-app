import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Avatar,
  Breadcrumbs,
  Typography,
  Link,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HomeIcon from '@mui/icons-material/Home';

export default function FullTopBarWithBreadcrumb() {
  return (
    <Box>
      {/* Topbar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#fff',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0',
          
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Search bar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f5f5f5',
              px: 2,
              py: 0.5,
              borderRadius: '8px',
              width: 250,
              ml: 28,
            }}
          >
            <SearchIcon sx={{ color: '#9e9e9e', mr: 1 }} />
            <InputBase
              placeholder="Search or type"
              sx={{
                fontSize: 14,
                color: 'black',
                width: '100%',
              }}
            />
          </Box>

          {/* Icons and Avatar */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton>
              <LocationOnIcon />
            </IconButton>
            <IconButton>
              <MapIcon />
            </IconButton>
            <IconButton>
              <CalendarTodayIcon />
            </IconButton>
            <IconButton>
              <HeadsetMicIcon />
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
            <Avatar sx={{ bgcolor: '#fcb28b' }} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Breadcrumb Bar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          py: 1,
          ml:30,
          position: 'fixed',
          top: 64, // height of the AppBar
          left: 0,
          right: 0,
          zIndex: 1100,
          backgroundColor: '#fdfdff',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">
            <HomeIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Modules
          </Link>
          <Typography color="text.primary">Medical management</Typography>
        </Breadcrumbs>

        {/* net zero badge */}
        <Box
          sx={{
            bgcolor: 'deepskyblue',
            color: 'black',
            px: 1.5,
            py: '3px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: 'bold',
          }}
        >
          net zero
        </Box>
      </Box>
             {/* Page Content */}
      <Box sx={{ mt: '112px', px: 2, }}>
        {/* Add your content here below topbar + breadcrumb */}
       <Typography fontWeight={600} fontSize={18} > ← Past Appointment</Typography>
      </Box>
    </Box>
  );
}
