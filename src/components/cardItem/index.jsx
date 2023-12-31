import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { TelegramIcon, TelegramShareButton } from "react-share";

function CardItem({ items, whatIsIt }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      {items.map((item) => (
        <Card
          sx={{
            margin: "10px 0px",
          }}
          className="border-[1px] border-[solid] border-[grey] my-4 rounded-md shadow-inner"
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {item.id}-{whatIsIt}
            </Typography>
            <Typography variant="h5" component="div">
              {item.themeName}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small">
              <NavLink to={item.url}>ochish</NavLink>
            </Button>
            <TelegramShareButton url={item.url}>
              <TelegramIcon className="rounded w-8"></TelegramIcon>
            </TelegramShareButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default CardItem;
