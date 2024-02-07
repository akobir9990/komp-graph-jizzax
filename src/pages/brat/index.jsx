import React, { useReducer } from "react";
import { packs } from "../task/packs";
import { Container, Draggable } from "react-smooth-dnd";

function reducer(state, { type, payload }) {
  switch (type) {
    case "answer_moved":
      const { removedIndex, addedIndex } = payload;
      console.log("actoin payload => ", payload);
      console.log("state => ", state);
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
    default:
      return state;
  }
}

function Brat() {
  const [state, dispatch] = useReducer(reducer, packs[0]);

  const onDrop = ({ removedIndex, addedIndex }) => {
    dispatch({ type: "answer_moved", payload: { removedIndex, addedIndex } });
  };

  return (
    <div className="flex w-[50%]">
      <div className="flex-grow">
        {state.questions.map((item) => (
          <div
            className="rounded-md p-2 border border-gray-500 cursor-pointer select-none"
            key={item.id}
          >
            {item.question}
          </div>
        ))}
      </div>
      <div>
        <Container lockAxis="y" onDrop={onDrop}>
          {state.answers.map((item) => (
            <Draggable key={item.id}>
              <div
                className="rounded-md p-2 border border-gray-500 cursor-pointer select-none"
                key={item.id}
              >
                {item.title}
              </div>
            </Draggable>
          ))}
        </Container>
      </div>
    </div>
  );
}

export default Brat;
