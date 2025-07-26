import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Link,
  Box,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";

import { useAssets, type Asset } from "../hooks/useAssets";

const MovieDetails = () => {
  const { data, genres, isLoading, error } = useAssets();
  const [filteredData, setFilteredData] = useState<Asset[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [cardStyles, setCardStyles] = useState<boolean>(false);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleGenreChange = (event: SelectChangeEvent<string>) => {
    const genre = event.target.value;
    setSelectedGenre(genre);

    if (genre === "All") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.genre?.includes(genre));
      setFilteredData(filtered);
    }
  };

  if (isLoading) return <Typography>Loading movie details...</Typography>;
  if (error) return <Typography>Error loading movie details...</Typography>;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Movie Details
      </Typography>

      <FormControl sx={{ mb: 3, minWidth: 200 }}>
        <InputLabel id="genre-select-label">Filter by Genre</InputLabel>
        <Select
          labelId="genre-select-label"
          value={selectedGenre}
          label="Filter by Genre"
          onChange={handleGenreChange}
        >
          {genres.map((genre) => (
            <MenuItem key={genre} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={3}>
        {filteredData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Link
              href={item.videoImage || "#"}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{ color: "inherit" }}
            >
<Card
  sx={{
    height: "100%",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    transition: "box-shadow 0.3s ease",
    boxShadow: 1,
    "&:hover": {
      boxShadow: 6,
    },
  }}
>
  {item.videoImage && (
    <Box component="img"
      src={item.videoImage}
      alt={item.name}
      sx={{
        width: '100%',
        height: 180,
        objectFit: 'cover',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
      }}
    />
  )}
  <CardContent>
    <Stack spacing={1}>
      <Typography variant="h5">{item.name}</Typography>
      <Typography variant="subtitle2">
        Views: {item.totalViews.total}
      </Typography>
      <Typography variant="body1">{item.description}</Typography>

      {item.genre && (
        <Box>
          <Typography variant="subtitle2">Genre:</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {item.genre.map((genreType) => (
              <Typography
                key={genreType}
                variant="body2"
                sx={{
                  bgcolor: "#e0e0e0",
                  px: 1,
                  borderRadius: 1,
                }}
              >
                {genreType}
              </Typography>
            ))}
          </Stack>
        </Box>
      )}
    </Stack>
  </CardContent>
</Card>

            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MovieDetails;
