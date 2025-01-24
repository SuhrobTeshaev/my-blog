import React, { useState } from "react";
import { TextField, Chip, Box, InputAdornment } from "@mui/material";
import debounce from "lodash.debounce";
import SearchIcon from "@mui/icons-material/Search";

interface FilterBarProps {
  onSearch: (query: string) => void;
  onTagFilter: (tags: string[]) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onSearch, onTagFilter }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const debouncedSearch = debounce((query: string) => {
    onSearch(query);
  }, 500);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };

  const handleTagClick = (tag: string) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);
    onTagFilter(updatedTags);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ padding: "20px 60px" }}
      gap={2}
      p={2}
    >
      <TextField
        sx={{
          borderRadius: "20px",

          backgroundColor: "#FCFDFE",
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
          },
        }}
        label="Search..."
        placeholder="Search by name"
        variant="outlined"
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box display="flex" gap={1} flexWrap="wrap">
        {["Technology", "Health", "Food", "Sport", "Politics", "Business"].map(
          (tag) => (
            <Chip
              key={tag}
              label={tag}
              color={selectedTags.includes(tag) ? "primary" : "default"}
              onClick={() => handleTagClick(tag)}
              sx={{
                padding: "8px 12px",
                backgroundColor: selectedTags.includes(tag)
                  ? "#11a850"
                  : "#4B6BFB0D",
                "&:hover": {
                  backgroundColor: "#11a850",
                  color: "white",

                  transition: "background-color 0.3s, transform 0.3s",
                },
                "&.Mui-selected": {
                  backgroundColor: "#11a850",
                  borderColor: "#06381BFF",
                },
              }}
            />
          ),
        )}
      </Box>
    </Box>
  );
};

export default FilterBar;
