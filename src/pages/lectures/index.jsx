import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TelegramIcon, TelegramShareButton } from "react-share";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

export default function BasicCard() {
  const items = [
    {
      id: 1,
      path: "https://t.me/atjmmmm/2",
      url: "1",
      themeName: "Axborot texnologiyalarining asosiy tushunchalari",
    },
    {
      id: 2,
      path: "https://t.me/atjmmmm/4",
      url: "2",
      themeName: "Axborot-kommunikatsiya texnologiyalari",
    },
    {
      id: 3,
      path: "https://t.me/atjmmmm/5",
      url: "3",
      themeName: "Operatsion tizimlar",
    },
    {
      id: 4,
      path: "https://t.me/atjmmmm/6",
      url: "4",
      themeName: "Internet texnologiyalari va ularning rivojlanishi",
    },
    {
      id: 5,
      path: "https://t.me/atjmmmm/7",
      url: "5",
      themeName: "Algoritm tushunchasi va ularning turlari",
    },
    {
      id: 6,
      path: "https://t.me/atjmmmm/8",
      url: "6",
      themeName: "Dasturlash tizimlari va tillari",
    },
    {
      id: 7,
      path: "https://t.me/atjmmmm/9",
      url: "7",
      themeName: "C++ dasturlash tilining asosiy tushunchalari va strukturasi",
    },
    {
      id: 8,
      path: "https://t.me/atjmmmm/10",
      url: "8",
      themeName: "C++ dasturlash tilida chiziqli algoritmlar",
    },
    {
      id: 9,
      path: "https://t.me/atjmmmm/11",
      url: "9",
      themeName: "C++ dasturlash tilida tarmoqlanuvchi algoritmlar",
    },
    {
      id: 10,
      path: "https://t.me/atjmmmm/12",
      url: "10",
      themeName: "C++ dasturlash tilida takrorlanuvchi algoritmlar",
    },
  ];
  return (
    <Box sx={{ minWidth: 275 }}>
      {items.map((item) => (
        <Card
          sx={{
            margin: "10px 0px",
          }}
          key={item.id}
          className="border-[1px] border-[solid] border-[grey] my-4 rounded-md shadow-inner"
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {item.id}-ma'ruza
            </Typography>
            <Typography variant="h5" component="div">
              {item.themeName}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small">
              <NavLink to={item.url} key={items.id}>
                ochish
              </NavLink>
            </Button>

            <TelegramShareButton url={item.path}>
              <TelegramIcon className="rounded w-8"></TelegramIcon>
            </TelegramShareButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
