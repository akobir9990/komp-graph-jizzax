import React from "react";
import { Box, Container } from "@mui/material";

function HomePage() {
  return (
    <Container>
      <Box>
        <Box className="h-[90vh] flex justify-center items-center text-center">
          <p className="md:text-5xl text-[22px]">
            Muhandislik va kompyuter grafikasi <br />
            <b>web darslik</b>
          </p>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
