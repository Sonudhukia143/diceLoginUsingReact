import { useState } from "react";
import randomNumArr from "./randomNum";
import IsWinner from "./isWinner";
import EachDie from "./eachDie";

export default function Dice({ noOfDice = 4 }) {
    let [dice, changeDie] = useState(randomNumArr());

    function rollDie() {
        changeDie(dice = randomNumArr(noOfDice));
    }

    let isWinner = false;

    if(dice.length > 0 && dice.every(e => e === dice[0])){
        isWinner = true;
    }

    return (
        <>
            <div>
                <IsWinner isWinner={isWinner} />
                <EachDie dice={dice} />
                <button className="rollDieButton" onClick={rollDie}>Roll Die</button>
            </div>
        </>
    )
}