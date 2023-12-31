import React, { useState } from "react";

import one from "./img/1.jpeg";
import two from "./img/2.jpeg";
import three from "./img/3.jpeg";
import four from "./img/4.jpeg";
import five from "./img/5.jpeg";
import six from "./img/6.jpeg";
import seven from "./img/7.jpeg";
import eight from "./img/8.jpeg";
import nine from "./img/9.jpeg";
import ten from "./img/10.jpeg";
import eleven from "./img/11.jpeg";
import twelve from "./img/12.jpeg";
import thirteen from "./img/13.jpeg";
import fourteen from "./img/14.jpeg";

import { TelegramIcon, TelegramShareButton } from "react-share";
import { Box, Button, Container } from "@mui/material";
import { NavLink } from "react-router-dom";

function Two() {
  const [goBack, setGoBack] = useState(false);
  const path = "";

  const items = [
    { id: 1, name: one },
    { id: 2, name: two },
    { id: 3, name: three },
    { id: 4, name: four },
    { id: 5, name: five },
    { id: 6, name: six },
    { id: 7, name: seven },
    { id: 8, name: eight },
    { id: 9, name: nine },
    { id: 10, name: ten },
    { id: 11, name: eleven },
    { id: 12, name: twelve },
    { id: 13, name: thirteen },
    { id: 14, name: fourteen },
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

export default Two;
