import React, { useState } from "react";

function Matching() {
  const [cardList, setCardList] = useState(
    { id: 1, order: 1, text: "text - 1" },
    { id: 2, order: 2, text: "text - 2" },
    { id: 3, order: 3, text: "text - 3" },
    { id: 4, order: 4, text: "text - 4" }
  );
  const [currentCard, setCurrentCard] = useState(null);

  const handleDragStart = (e, card) => {
    console.log("drop", card);
    setCurrentCard(card);
  };
  const handleDragEnd = (e) => {
    e.target.style.background = "none";
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.target.style.background = "lightgrey";
  };
  const handleDrop = (e, card) => {
    e.preventDefault();
    setCardList(
      cardList.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard.id) {
          return { ...c, order: card.order };
        }
        return c;
      })
    );
    e.target.style.background = "none";
  };

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };
  return (
    <div className="">
      {cardList.sort(sortCards).map((card) => {
        return (
          <div
            className="border-[2px] border-[solid] border-[black] w-[200px] h-[100px]"
            draggable={true}
            onDragStart={(e) => handleDragStart(e, card)}
            onDragEnd={(e) => handleDragEnd(e)}
            onDragLeave={(e) => handleDragEnd(e)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, card)}
          >
            {card.text}
          </div>
        );
      })}
    </div>
  );
}

export default Matching;
