import * as React from "react";
import { Box } from "@mui/system";
import { items } from "./const";
import CardItem from "../../components/cardItem";

export default function BasicCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <CardItem items={items} whatIsIt="amaliy mashg'ulot" />
    </Box>
  );
}
