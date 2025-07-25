import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="primary" sx={{ mb: 4 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontSize: '1.5rem' }}>
          Insight Dashboard
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            component={NavLink}
            to="/dashboard"
            sx={{ color: 'white', fontSize: '1rem' }}
          >
            Dashboard
          </Button>
          <Button
            component={NavLink}
            to="/movie-details"
            sx={{ color: 'white', fontSize: '1rem' }}
          >
            Movies
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
