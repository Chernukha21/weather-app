import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { Box, Container } from '@mui/material';

const MainLayout = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#dfeaf7',
        py: 4,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: 'white',
          borderRadius: 2,
          boxShadow: 3,
          p: 2,
        }}
      >
        <Header />

        <Outlet />
        <Footer />
      </Container>
    </Box>
  );
};

export default MainLayout;
