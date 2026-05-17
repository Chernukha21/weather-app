import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        pt: 2,
        borderTop: '1px solid',
        borderColor: 'divider',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2026 OpenWeather App
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Created by Олександр
      </Typography>

      <Link
        href="https://github.com"
        target="_blank"
        underline="hover"
        sx={{
          display: 'inline-block',
          mt: 1,
        }}
      >
        GitHub
      </Link>
    </Box>
  );
};

export default Footer;
