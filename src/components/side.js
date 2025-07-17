import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import {
  Home as HomeIcon,
  ViewModule as ModulesIcon,
  CheckBox as MyActionsIcon,
  Assignment as AllActionsIcon,
  Description as ReportsIcon,
  Group as UsersIcon,
  MenuBook as HelpIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          borderRight: 'none',
          paddingTop: 3,
        },
      }}
    >
      <Box px={2}>
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: '#1e1e1e' }} />
          <Box>
            <Typography fontWeight={700} fontSize={20}>System</Typography>
            <Box display="flex" alignItems="center" fontSize={13} color="gray">
              <LocationIcon sx={{ fontSize: 16, mr: 0.5 }} />
              SiteMine2233
            </Box>
          </Box>
        </Box>

        <List disablePadding>
          <ListItem>
            <ListItemIcon><HomeIcon sx={{ color: '#b0b0b0' }} /></ListItemIcon>
            <ListItemText primary="Home" primaryTypographyProps={{ fontSize: 15, color: '#b0b0b0' }} />
          </ListItem>

          <ListItem sx={{
            bgcolor: '#00a9ee',
            borderRadius: 2,
            mx: 1,
            mb: 2,
            color: '#fff',
          }}>
            <ListItemIcon><ModulesIcon sx={{ color: '#fff' }} /></ListItemIcon>
            <ListItemText primary="Modules" primaryTypographyProps={{ fontWeight: 600 }} />
          </ListItem>

          <Divider sx={{ mx: 1 }} />

          <Typography fontWeight={600} fontSize={14} sx={{ px: 2, pt: 2, pb: 1 }} color="#444">
            Actions
          </Typography>

          <ListItem>
            <ListItemIcon><MyActionsIcon sx={{ color: '#b0b0b0' }} /></ListItemIcon>
            <ListItemText primary="My Actions" primaryTypographyProps={{ fontSize: 15, color: '#b0b0b0' }} />
          </ListItem>
          <ListItem>
            <ListItemIcon><AllActionsIcon sx={{ color: '#b0b0b0' }} /></ListItemIcon>
            <ListItemText primary="All Actions" primaryTypographyProps={{ fontSize: 15, color: '#b0b0b0' }} />
          </ListItem>

          <Divider sx={{ mx: 1, mt: 2 }} />

          <Typography fontWeight={600} fontSize={14} sx={{ px: 2, pt: 2, pb: 1 }} color="#444">
            Others
          </Typography>

          <ListItem>
            <ListItemIcon><ReportsIcon sx={{ color: '#b0b0b0' }} /></ListItemIcon>
            <ListItemText primary="All Reports" primaryTypographyProps={{ fontSize: 15, color: '#b0b0b0' }} />
          </ListItem>
          <ListItem>
            <ListItemIcon><UsersIcon sx={{ color: '#b0b0b0' }} /></ListItemIcon>
            <ListItemText primary="User Management" primaryTypographyProps={{ fontSize: 15, color: '#b0b0b0' }} />
          </ListItem>
          <ListItem>
            <ListItemIcon><HelpIcon sx={{ color: '#b0b0b0' }} /></ListItemIcon>
            <ListItemText primary="Help Manual" primaryTypographyProps={{ fontSize: 15, color: '#b0b0b0' }} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;