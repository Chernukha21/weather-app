import { Box, IconButton, Typography } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import LogoutIcon from '@mui/icons-material/Logout';
import NavTabs from '../NavigationTabs/NavigationTabs.jsx';

const Header = () => {
  const user = 'Олександр';

  return (
    <Box component="header" sx={{ textAlign: 'center', mb: 2 }}>
      <Box sx={{ mb: 1 }}>
        <CloudIcon color="primary" sx={{ fontSize: 48 }} />

        <Typography
          variant="h4"
          component="h1"
          fontWeight={700}
          sx={{ lineHeight: 1 }}
        >
          OpenWeather
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        <NavTabs />

        <Typography
          variant="body2"
          sx={{
            textAlign: 'left',
            lineHeight: 1.1,
            whiteSpace: 'nowrap',
          }}
        >
          {user ? (
            <>
              Привіт,
              <br />
              {user}!
            </>
          ) : (
            'Login, please'
          )}
        </Typography>

        {user && (
          <IconButton color="primary" size="small">
            <LogoutIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Header;
