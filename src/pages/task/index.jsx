// import React, { useEffect, useState } from "react";
// import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// import { packs } from "./packs";
// import { Box, Button } from "@mui/material";

// export default function Test() {
//   const [randomNumber, setRandomNumber] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [complatedAnswerIds, setComplatedAnswersIds] = useState([]);
//   const [cardList, setCardList] = useState(packs[randomNumber].answers);
//   const [currentCard, setCurrentCard] = useState(null);

//   const quizLimite = 4;

//   console.log("randomNumber => ", randomNumber);

//   const nextQeustion = () => {
//     if (currentQuestion < packs.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//     randomQuestion();
//   };
//   const getRandomNumber = () => {
//     return Math.floor(Math.random() * packs.length);
//   };
//   const randomQuestion = () => {
//     const randomNum = getRandomNumber();

//     if (!complatedAnswerIds.includes(randomNum)) {
//       setComplatedAnswersIds((p) => [...p, randomNum]);
//       setRandomNumber(randomNum);
//     } else {
//       randomQuestion();
//     }
//   };

//   const handleDragStart = (e, card) => {
//     setCurrentCard(card);
//   };
//   const handleDragEnd = (e) => {
//     e.target.style.background = "#c3c3c3";
//   };
//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.target.style.background = "black";
//   };
//   const handleDrop = (e, card) => {
//     e.preventDefault();
//     setCardList(
//       cardList.map((c) => {
//         if (c.id === card.id) {
//           return { ...c, order: currentCard.order };
//         }
//         if (c.id === currentCard.id) {
//           return { ...c, order: card.order };
//         }
//         return c;
//       })
//     );
//     e.target.style.background = "#c3c3c3";
//   };

//   const sortCards = (a, b) => {
//     if (a.order > b.order) {
//       return 1;
//     } else {
//       return -1;
//     }
//   };

//   useEffect(() => {
//     setRandomNumber(getRandomNumber());
//   }, []);

//   return (
//     <div>
//       <h1 className="text-4xl m-4">
//         Savol yoniga to'g'ri javobni surib qo'ying
//       </h1>
//       <div className="flex w-[100%]">
//         <div className="w-[70%]">
//           {packs[randomNumber].questions.map((question) => {
//             return (
//               <div
//                 key={question.id}
//                 className="h-[100px] flex justify-between items-center bg-[#c3c3c3] rounded-md m-4 p-4"
//               >
//                 <div className="h-[100%] flex items-center justify-between text-[24px] ">
//                   {question.question}
//                 </div>
//                 <KeyboardDoubleArrowRightIcon className="scale-150" />
//               </div>
//             );
//           })}
//         </div>
//         <div className="w-[30%]">
//           {cardList.sort(sortCards).map((card) => {
//             return (
//               <div
//                 key={card.id}
//                 className="h-[100px] flex justify-between bg-[#c3c3c3] rounded-md m-4 p-4"
//                 draggable={true}
//                 onDragStart={(e) => handleDragStart(e, card)}
//                 onDragEnd={(e) => handleDragEnd(e)}
//                 onDragLeave={(e) => handleDragEnd(e)}
//                 onDragOver={(e) => handleDragOver(e)}
//                 onDrop={(e) => handleDrop(e, card)}
//               >
//                 <img draggable={false} src={card.answer} alt="" />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <Box className="sm:flex-row sm:my-3 flex flex-col justify-between">
//         <Button
//           disabled={currentQuestion === quizLimite - 1}
//           variant="outlined"
//           onClick={nextQeustion}
//           className="py-4"
//           sx={{
//             margin: "5px 0px",
//           }}
//         >
//           keyingi savol
//         </Button>
//       </Box>
//     </div>
//   );
// }
import React from "react";

function index() {
  return (
    <div className="text-center text-5xl h-[100vh]">We are working on it</div>
  );
}

export default index;
