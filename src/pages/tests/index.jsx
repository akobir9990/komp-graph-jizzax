import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import { questions } from "./quiz";
import "./style.css";
import { Box } from "@mui/material";

function Quiz() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerId, setAnswerId] = useState();
  const [isAnswered, setIsAnswered] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [complatedAnswerIds, setComplatedAnswersIds] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);
  const [scorePercent, setScorePercent] = useState(0);

  const quizLimite = 20;

  const checkAnswer = (item) => {
    setIsAnswered(true);
    setAnswerId(item.id);
    if (item.isCorrect) {
      setScore((score) => score + 1);
    }
  };
  const tryAgain = () => {
    setShowScore(false);
    setScore(0);
    setIsAnswered(false);
    randomQuestion();
    setCurrentQuestion((currentQuestion) => 0);
  };

  const nextQeustion = () => {
    if (!isAnswered) {
      alert("siz savolga javob bermadingiz iltimos javob bering");
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsAnswered(!isAnswered);
    }
    randomQuestion();
  };

  const getResult = () => {
    setShowScore(!showScore);
    setComplatedAnswersIds([]);

    setScorePercent(Math.floor((score / quizLimite) * 100));
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * questions.length);
  };

  const randomQuestion = () => {
    const randomNum = getRandomNumber();

    if (!complatedAnswerIds.includes(randomNum)) {
      setComplatedAnswersIds((p) => [...p, randomNum]);
      setRandomNumber(randomNum);
    } else {
      randomQuestion();
    }
  };

  useEffect(() => {
    setRandomNumber(getRandomNumber());
  }, []);

  return (
    <div>
      {showScore ? (
        <div>
          <div className="border-[2px] border-[solid] border-[grey] rounded-md py-4 px-3">
            <h1 className="text-4xl">Test yakunlandi</h1>
            <p className="text-3xl">
              To'g'ri javoblar soni: {score} <br />
              Umumiy savollar soni: {quizLimite} <br />
            </p>
            <div className="relative border-[solid] border-[1px] border-[grey] rounded-lg min-w-[250px] max-w-[400px] my-3 h-9 flex items-center overflow-hidden">
              <div
                style={{ width: `${scorePercent}%` }}
                className={
                  "text-[15px] relative h-9 flex items-center justify-center text-slate-50 font-bold overflow-hidden " +
                  (scorePercent < 56 ? "bg-red-600" : "") +
                  (scorePercent > 55 && scorePercent < 71
                    ? "bg-yellow-600"
                    : "") +
                  (scorePercent > 70 && scorePercent < 86
                    ? "bg-green-600"
                    : "") +
                  (scorePercent > 85 ? "bg-[green]" : "")
                }
              >
                {scorePercent}%
              </div>
            </div>
            <div className="sm:text-[40px] text-[30px]">
              {scorePercent < 56 ? (
                <h1 className="">NATIJANGIZ YAHSHI EMAS!!</h1>
              ) : (
                <h1> </h1>
              )}
              {scorePercent > 55 && scorePercent < 71 ? (
                <h1 className="">hech bo'lmaganda 3 oldingiz</h1>
              ) : (
                <h1> </h1>
              )}
              {scorePercent > 70 && scorePercent < 86 ? (
                <h1 className="">malades 4 olding</h1>
              ) : (
                <h1> </h1>
              )}
              {scorePercent > 85 ? (
                <h1 className="">MAQTOV YORLIG'I BERINGLA 5 OLDI BU BOLA</h1>
              ) : (
                <h1> </h1>
              )}
            </div>
            <Button
              className="w-[250px] mt-4"
              variant="contained"
              onClick={tryAgain}
            >
              qayta topshirish
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-3xl font-bold italic">
            Savol - {currentQuestion + 1}/{quizLimite}
          </h3>
          <h1 className="cursor-help text-3xl font-bold py-2">
            {questions[randomNumber].questionText}
          </h1>
          <div>
            {questions[randomNumber].answerOptions.map((item) => (
              <div
                key={item.id}
                className={
                  "bg-[rgba(209,209,209,0.4)] cursor-pointer answerItem " +
                  (isAnswered && answerId === item.id
                    ? item.isCorrect
                      ? " "
                      : "wrongAnswer "
                    : "") +
                  (isAnswered ? "disable " : "") +
                  (isAnswered && item.isCorrect ? "currectAnswer " : "")
                }
                onClick={() => checkAnswer(item)}
              >
                {item.answerText}
              </div>
            ))}
          </div>
          <Box className="sm:flex-row sm:my-3 flex flex-col justify-between">
            <Button
              disabled={currentQuestion === quizLimite - 1}
              variant="outlined"
              onClick={nextQeustion}
              className="py-4"
              sx={{
                margin: "5px 0px",
              }}
            >
              keyingi savol
            </Button>
            <Button
              variant="contained"
              onClick={tryAgain}
              className="my-4 border-[solid] border-[1px] border-[red] "
              sx={{
                margin: "5px 0px",
              }}
            >
              qayta topshirish
            </Button>
            <Button
              variant="contained"
              onClick={getResult}
              sx={{
                margin: "5px 0px",
              }}
            >
              Natijani ko'rish
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Quiz;
