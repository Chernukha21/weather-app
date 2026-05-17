import { NavLink, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const tabs = [
  {
    label: 'Головна',
    path: '/',
  },
  {
    label: 'Обране',
    path: '/favorites',
  },
];

export default function NavTabs() {
  const location = useLocation();

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={location.pathname} aria-label="navigation tabs">
        {tabs.map((tab) => (
          <Tab
            key={tab.path}
            label={tab.label}
            value={tab.path}
            component={NavLink}
            to={tab.path}
          />
        ))}
      </Tabs>
    </Box>
  );
}
