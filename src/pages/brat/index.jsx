import React, { useReducer, useState } from "react";
import { packs } from "../task/packs";
import { Container, Draggable } from "react-smooth-dnd";
import { Button } from "@mui/material";

function Brat() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [state, dispatch] = useReducer(reducer, packs[randomNumber]);

  function reducer(state, { type, payload }) {
    switch (type) {
      case "answer_moved":
        const { removedIndex, addedIndex } = payload;
        const result = state.answers.map((i, idx, arr) => {
          const removedObj = arr[removedIndex];
          console.log("removedObj => ", removedObj);
          const addedObj = arr[addedIndex];
          console.log("addedObj => ", addedObj);
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
      default:
        return state;
    }
  }

  const onDrop = ({ removedIndex, addedIndex }) => {
    dispatch({ type: "answer_moved", payload: { removedIndex, addedIndex } });
  };
  const getRandomNumber = () => {
    return Math.floor(Math.random() * packs.length);
  };
  const handleNext = (rnd) => {
    let rndNumber = getRandomNumber();
    setRandomNumber(rndNumber);
  };
  console.log("getrandomnumber => ", randomNumber);
  console.log("state => ", state);

  return (
    <div className="h-[100vh]">
      <div className="flex w-[50%] border border-[grey]">
        <div className="flex-grow justify-between">
          {state.questions.map((item) => (
            <div
              className="h-[100px] rounded-md border border-[gray] cursor-pointer m-1 select-none overflow-hidden"
              key={item.id}
            >
              {item.question}
            </div>
          ))}
        </div>
        <div>
          <Container lockAxis="y" onDrop={onDrop}>
            {state.answers.map((item, idx) => (
              <Draggable key={item.id}>
                <div
                  className="h-[100px] rounded-md border border-[gray] cursor-pointer m-1 select-none overflow-hidden"
                  key={item.id}
                >
                  <img
                    className="select-none h-[90%]"
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
      <Button
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
  );
}

export default Brat;
