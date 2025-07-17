import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Paper } from '@mui/material';

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography variant="body2">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const LifestyleDietaryTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const placeholderText =
    'Lorem ipsum dolor sit amet amet amet amet amet consectetur. lorem proin enim pretium nisi quis. ' +
    'Lorem dolor sit amet amet amet amet amet consectetur. lorem proin enim pretium nisi quis. ' +
    'Lorem dolor sit amet amet amet amet amet consectetur. lorem proin enim pretium nisi quis. ' +
     'Lorem ipsum dolor sit amet amet amet amet amet consectetur. lorem proin enim pretium nisi quis. ' +
    'Lorem dolor sit amet amet amet amet amet consectetur. lorem proin enim pretium nisi quis. ' +
    'Lorem dolor sit amet amet amet amet amet consectetur. lorem proin enim pretium nisi quis. ' +
     'Lorem ipsum dolor sit amet amet amet amet amet consectetur. lorem proin enim pretium nisi quis. ' +
    'Lorem dolor sit amet amet amet amet amet consectetur. lorem proin enim pretium nisi quis. ' +
    'Lorem dolor sit amet amet amet amet amet consectetur. lorem proin enim pretium nisi quis. ' +
    'Lorem dolor sit amet amet amet amet amet consectetur. lorem proin enim pretium nisi quis.';

  return (
    <Paper
      elevation={1}
      sx={{
         width:400,
        height:410,
        border: '1px solid #d0dfea',
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: '#f9fbfd',
       
      }}
    >
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
        sx={{
          backgroundColor: '#ffffff',
          '& .MuiTab-root': {
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            borderBottom: '2px solid transparent',
          },
          '& .Mui-selected': {
            borderBottom: '2px solid #00b0f0',
            color: '#00b0f0',
          },
        }}
      >
        <Tab label="Lifestyle" />
        <Tab label="Dietary" />
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        {placeholderText}
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        {placeholderText}
      </TabPanel>
    </Paper>
  );
};

export default LifestyleDietaryTabs;
