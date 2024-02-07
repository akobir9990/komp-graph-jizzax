import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import { questions } from "./quiz.js";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  let limitOfQuestions = questions.length;

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (isCorrect) {
    }

    const nextQusetion = currentQuestion + 1;

    // if you wanna change questions limit you gotta change "2" dont forget about html too change

    if (nextQusetion < limitOfQuestions) {
      setCurrentQuestion(nextQusetion);
    } else {
      setShowScore(true);
    }
  };
  const complate = () => {};

  let persent = (score * 100) / limitOfQuestions;
  return (
    <div>
      {showScore ? (
        <Card className="p-10 shadow-3xl">
          <h1 className="text-4xl mb-[30px]">
            Your score is: {score} of {limitOfQuestions} ({persent}%)
          </h1>
          <Button variant="outlined">try again</Button>
        </Card>
      ) : (
        <Card className="p-5 shadow-3xl">
          <section>
            <h1>
              Question {currentQuestion + 1} / {limitOfQuestions}
            </h1>
            <p>{questions[currentQuestion].questionText}</p>
          </section>

          <section className="mmaf-2">
            {questions[currentQuestion].answerOptions.map((item) => (
              <div
                key={item.answerText}
                onClick={() => handleClick(item.isCorrect)}
                className="py-3 px-4 my-2 border-[1px] border-[solid] border-[red] cursor-pointer"
              >
                {item.answerText}
              </div>
            ))}
            <button>next</button>
          </section>
        </Card>
      )}
    </div>
  );
}

export default Quiz;
