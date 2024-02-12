import React, { useReducer, useState } from "react";
import { packs } from "../task/packs";
import { Container, Draggable } from "react-smooth-dnd";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Brat() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [complatedAnswers, setComplatedAnswers] = useState([randomNumber]);

  function reducer(state, { type, payload }) {
    switch (type) {
      case "answer_moved":
        const { removedIndex, addedIndex } = payload;
        const result = state.answers.map((i, idx, arr) => {
          const removedObj = arr[removedIndex];
          const addedObj = arr[addedIndex];
          if (idx === removedIndex) {
            return {
              ...i,
              order: addedObj.order,
            };
          } else if (idx === addedIndex) {
            return {
              ...i,
              order: removedObj.order,
            };
          } else {
            return i;
          }
        });
        return {
          ...state,
          answers: result.sort((a, b) => a.order - b.order),
        };
      case "question_moved":
        return {
          ...state,
        };
      case "handle_next":
        console.log("payload => ", payload);
        return packs[payload.newRandom];
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, packs[randomNumber]);
  const onDrop = ({ removedIndex, addedIndex }) => {
    dispatch({ type: "answer_moved", payload: { removedIndex, addedIndex } });
  };

  console.log("random number => ", randomNumber);

  const handleNext = () => {
    const getRandomNumber = () => {
      const newRandom = Math.floor(Math.random() * packs.length);
      if (complatedAnswers.includes(newRandom)) {
        return getRandomNumber();
      }
      if (randomNumber !== newRandom) {
        setRandomNumber(newRandom);
        setComplatedAnswers((p) => [...p, newRandom]);
        dispatch({
          type: "handle_next",
          payload: {
            newRandom,
          },
        });
        return newRandom;
      }
      return getRandomNumber();
    };
    getRandomNumber();
  };

  return (
    <div className="h-[100vh]">
      <h1 className="text-4xl text-center my-5">
        Savolni yonidagi javoblardan to'gri keladigini surib qo'ying
      </h1>
      <div className="flex flex-grow gap-1  border border-[grey]">
        <div className="flex-grow justify-between">
          {state.questions.map((item) => (
            <div
              className="flex justify-between items-center h-[150px] rounded-md border border-[gray] cursor-pointer select-none overflow-hidden m-1 text-2xl p-1"
              key={item.id}
            >
              {item.question}
              <ArrowForwardIosIcon />
            </div>
          ))}
        </div>
        <div>
          <Container lockAxis="y" onDrop={onDrop}>
            {state.answers.map((item, idx) => (
              <Draggable className="m-1" key={item.id}>
                <div
                  className="w-[150px] h-[150px] rounded-md border border-[gray] cursor-pointer select-none overflow-hidden "
                  key={item.id}
                >
                  <img
                    className="select-none"
                    src={item.answer}
                    alt=""
                    draggable={false}
                  />
                </div>
              </Draggable>
            ))}
          </Container>
        </div>
      </div>
      <div className="btns">
        <Button
          disabled={packs.length === complatedAnswers.length}
          variant="outlined"
          onClick={handleNext}
          className="py-4"
          sx={{
            margin: "5px 0px",
          }}
        >
          keyingi savol
        </Button>
      </div>
    </div>
  );
}

export default Brat;
