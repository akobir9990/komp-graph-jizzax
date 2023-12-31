import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { items } from "../presentation/const";
import { NavLink } from "react-router-dom";
import { TelegramIcon, TelegramShareButton } from "react-share";
function HomePage() {
  return (
    <Container>
      <Box>
        <Box className="h-[90vh] flex justify-center items-center text-center">
          <p className="md:text-5xl text-[22px]">
            Axborot texnologiyalari va jarayonlarni matematik modellashtirish
            fanidan <br />
            <b>web darslik</b>
          </p>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
