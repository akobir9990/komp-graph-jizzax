import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import abdullayev from "../../assets/images/author.jpeg";
export default function MediaCard() {
  return (
    <div className="h-[100vh]">
      <Card className="flex flex-col p-7 items-center sm:flex-row my-7">
        <div>
          <img
            className=" max-w-[300px] rounded-md"
            src={abdullayev}
            alt="Abdullayev Zafar Sayfutdinovich"
          />
        </div>
        <CardContent className="sm:text-4xl">
          <h1 className="text-[30px] font-bold">
            MUХITDINОV АBDUVАXOB ABDUVALIYEVICH
          </h1>
          <h2 className="text-[20px]">
            Axborot texnologiyalari kafedrasi mudiri <br /> fizika matematika
            fanlari nomzodi dotsent
          </h2>
        </CardContent>
      </Card>
    </div>
  );
}
