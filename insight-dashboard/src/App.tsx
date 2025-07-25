import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import MovieDetails from './pages/MovieDetails';
import Header from './components/Header';
import Container from '@mui/material/Container';

const App = () => {
  return (
    <Router>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/movie-details" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;