import React, { useState } from "react";

import one from "./img/1.jpeg";
import two from "./img/2.jpeg";

import { TelegramIcon, TelegramShareButton } from "react-share";

import { Box, Button, Container } from "@mui/material";
import { NavLink } from "react-router-dom";

function Three() {
  const [goBack, setGoBack] = useState(false);
  const path = "";
  const items = [
    { id: 1, name: one },
    { id: 2, name: two },
  ];
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0px",
        }}
      >
        {goBack ? (
          <NavLink to={path}>
            <Button
              sx={{ bgcolor: "red", color: "white" }}
              onMouseEnter={() => setGoBack(!goBack)}
              variant="outlined"
            >
              X
            </Button>
          </NavLink>
        ) : (
          <NavLink to="/practice">
            <Button onMouseLeave={() => setGoBack(!goBack)} variant="contained">
              ortga
            </Button>
          </NavLink>
        )}
        <TelegramShareButton sx={{ borderraius: "10px" }} url={path}>
          <TelegramIcon
            sx={{ borderraius: "10px" }}
            className="rounded w-8"
          ></TelegramIcon>
        </TelegramShareButton>
      </Box>
      {items.map((item) => (
        <img className="w-[100%]" key={item.id} src={item.name} alt="???" />
      ))}
    </Container>
  );
}

export default Three;
