import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Category1 from './category1';
import Category2 from './category2';
import Category3 from './category3';
import Category4 from './category4';


export default function Tabhome() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant="scrollable"
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            TabIndicatorProps={{ style: { background: 'white' } }} >
            <Tab label={<span style={{ color: 'yellow' }}>All</span>} value="1" />
            <Tab label={<span style={{ color: 'yellow' }}>Programming Fundamentals</span>} value="2" />
            <Tab label={<span style={{ color: 'yellow' }}>Web Development</span>} value="3" />
            <Tab label={<span style={{ color: 'yellow' }}>Machine Learning</span>} value="4" />
            <Tab label={<span style={{ color: 'yellow' }}>Data Science</span>} value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Category1 />
          <Category2 />
          <Category3 />
          <Category4 />
        </TabPanel>
        <TabPanel value="2">
          <Category1 />
        </TabPanel>
        <TabPanel value="3">
          <Category2 />
        </TabPanel>
        <TabPanel value="4">
          <Category3 />
        </TabPanel>
        <TabPanel value="5">
          <Category4 />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
