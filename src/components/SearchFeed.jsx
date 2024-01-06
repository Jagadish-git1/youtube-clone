import { Box, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { Videos } from "./";
import { useParams } from "react-router-dom";

import { fetchFromApi } from "../utils/fetchFromApi";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ color: "#fff" }} mb={2}>
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
