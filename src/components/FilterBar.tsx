import React, { useState } from "react";
import { TextField, Chip, Box } from "@mui/material";
import debounce from "lodash.debounce";

interface FilterBarProps {
  onSearch: (query: string) => void;
  onTagFilter: (tags: string[]) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onSearch, onTagFilter }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  

   const debouncedSearch = debounce((query: string) => {
     onSearch(query);
   }, 500); // 500ms задержка

   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
     debouncedSearch(event.target.value); // Вызываем debounced функцию
   };

  const handleTagClick = (tag: string) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);
    onTagFilter(updatedTags);
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} p={2}>
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
      />
      <Box display="flex" gap={1} flexWrap="wrap">
        {["tech", "health", "food", "sport", "politics", "business"].map(
          (tag) => (
            <Chip
              key={tag}
              label={tag}
              color={selectedTags.includes(tag) ? "primary" : "default"}
              onClick={() => handleTagClick(tag)}
              sx={{
                backgroundColor: selectedTags.includes(tag)
                  ? "#11a850"
                  : "#d3d3d3",
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
          )
        )}
      </Box>
    </Box>
  );
};

export default FilterBar;
