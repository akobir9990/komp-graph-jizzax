import { Card } from "@mui/material";
import React from "react";
import logo from "../../assets/macIcon.png";
function index() {
  return (
    <div className="h-[100vh]">
      <Card className=" w-[100%] flex justify-ceenter items-center flex-wrap px-[50px] py-[70px]">
        <div className="flex justify-center items-center flex-col text-3xl font-bold p-3 w-[150px] h-[150px] ">
          <img className="" src={logo} alt="???" />
          MvaKG
        </div>
        <p className="p-3 min-w-[200px] w-[700px]">
          Ushbu dastur muhandislik va kompyuter grafikasi fanidan o'quv
          mashg'ulotni to'liq o'tish uchun tayyorlangan va o'z ichiga shu fanga
          tegishli bo'lgan o'quv uslubiy materiallarni, videodarslik, amaliy
          mashg'ulot topshiriqlari hamda test mashg'ulotini jamlagan.
        </p>
      </Card>
    </div>
  );
}
export default index;
