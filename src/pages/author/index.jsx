import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import muxitdinov from "../../assets/images/author.jpg";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function MediaCard() {
  return (
    <div className="h-[100vh]">
      <Card className="flex flex-col p-7 items-center sm:flex-row my-7">
        <div>
          <img
            className=" max-w-[300px] rounded-md"
            src={muxitdinov}
            alt="Abdullayev Zafar Sayfutdinovich"
          />
        </div>
        <CardContent className="sm:text-4xl">
          <h1 className="text-[30px] font-bold">
            MUХITDINОV АBDUVАXOB ABDUVALIYEVICH
          </h1>
          <h2 className="text-[23px] m-[10px]">
            “Muhandislik va kompyuter grafikasi” kafedrasi assistenti
          </h2>
          <ul className="text-[16px]">
            <li className="flex items-center gap-[15px] h-[28px]">
              <PhoneIcon />
              +998 91 941 33 83
            </li>
            <li className="flex items-center gap-[15px] h-[28px]">
              <MailOutlineIcon />
              <a href="https://a.muxitdinov1987@gmail.com">
                a.muxitdinov1987@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-[15px] h-[28px]">
              <TelegramIcon />
              <a href="https://t.me/vaxob2608">@vaxob2608</a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
