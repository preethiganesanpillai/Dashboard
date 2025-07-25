import { Typography, Box, Paper } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import useTimeSeriesData from '../hooks/useTimeSeries';

const DashboardPage = () => {
  const { data, isLoading, error } = useTimeSeriesData();

  if (isLoading) return <Typography>Loading time series data...</Typography>;
  if (error) return <Typography>Error loading data</Typography>;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Time Series Data
      </Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#1976d2" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default DashboardPage;
