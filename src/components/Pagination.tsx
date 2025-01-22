import React from "react";
import { Pagination, Select, MenuItem, Box } from "@mui/material";

interface PaginationBarProps {
  count: number;
  page: number;
  itemsPerPage: number;
  onChangePage: (page: number) => void;
  onChangeItemsPerPage: (items: number) => void;
}

const PaginationBar: React.FC<PaginationBarProps> = ({
  count,
  page,
  itemsPerPage,
  onChangePage,
  onChangeItemsPerPage,
}) => (
  <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
    <Pagination
      count={count}
      page={page}
      onChange={(_, value) => onChangePage(value)}
    />
    <Select
      value={itemsPerPage}
      onChange={(e) => onChangeItemsPerPage(Number(e.target.value))}
    >
      {[10, 20, 50].map((num) => (
        <MenuItem key={num} value={num}>
          {num}
        </MenuItem>
      ))}
    </Select>
  </Box>
);

export default PaginationBar;
