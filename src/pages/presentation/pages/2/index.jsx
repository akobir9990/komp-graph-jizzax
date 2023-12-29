import React, { useState } from "react";

import one from "./img/1.svg";
import two from "./img/2.svg";
import three from "./img/3.svg";
import four from "./img/4.svg";
import five from "./img/5.svg";
import six from "./img/6.svg";
import seven from "./img/7.svg";
import eight from "./img/8.svg";
import nine from "./img/9.svg";
import ten from "./img/10.svg";
import eleven from "./img/11.svg";
import twelve from "./img/12.svg";
import thirteen from "./img/13.svg";
import fourteen from "./img/14.svg";
import fifteen from "./img/15.svg";
import sixteen from "./img/16.svg";
import seventeen from "./img/17.svg";
import eighteen from "./img/18.svg";
import nineteen from "./img/19.svg";

import { TelegramIcon, TelegramShareButton } from "react-share";
import { Box, Button, Container } from "@mui/material";
import { NavLink } from "react-router-dom";

function Two() {
  const [goBack, setGoBack] = useState(false);
  const path = "https://t.me/atjmmmm/2";

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
    { id: 15, name: fifteen },
    { id: 16, name: sixteen },
    { id: 17, name: seventeen },
    { id: 18, name: eighteen },
    { id: 19, name: nineteen },
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
          <NavLink to="/presentation">
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
