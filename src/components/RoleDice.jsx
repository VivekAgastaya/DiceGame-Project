import { useState } from "react";
import styled from "styled-components";

const RoleDice = ({ currentDice, roleDice }) => {

  // const [currentDice, setCurrentDice] = useState(1);

  // const generateRandomNumber = (min, max) => {
  //   console.log(Math.floor(Math.random() * (max - min) + min));
  //   return Math.floor(Math.random() * (max - min) + min);
  // };

  // const roleDice = () => {
  //   const randomNumber = generateRandomNumber(1, 7);
  //   setCurrentDice((prev) => randomNumber);
  // };


  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice imgae"></img>
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`

 display: flex;
 flex-direction: column;
 align-items: center;
 margin-top: 48px;

   .dice{
    cursor: pointer;
   }

 p{
  font-size: 24px;
 }
  
`