import "./card.css";
import React, { useState } from "react";

interface IParentProps {
  emoji: string;
  index: number;
}

const Card: React.FunctionComponent<IParentProps> = ({ emoji, index }) => {
  const [flipSide, setFlipSide] = useState<boolean>();
  const onClick = () => {
    setFlipSide(!flipSide);
  };

  return (
    <>
      <div className="Card" onClick={onClick}>
        <div>{flipSide ? emoji : index}</div>
      </div>
    </>
  );
};

export default Card;
