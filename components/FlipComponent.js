"use client";

import { useState, useCallback } from "react";
import FlipPages from "./FlipPages";

export default function FlipComponent({ id, target }) {
  const [targetNumber, setTargetNumber] = useState(0);

  if (targetNumber !== target) {
    setTargetNumber(target);
  }
  // if (targetNumber === target) {
  //   // setTargetNumber(target);
  // }
  const handleTargetChange = (event) => {
    const newTarget = parseInt(event.target.value, 10);
    setTargetNumber(isNaN(newTarget) ? 0 : newTarget);
  };

  return (
    <>
      <div className="flip-base w-[160px] h-[270px] bg-[#393939] relative overflow-hidden">
        <div className="flip-inner-base absolute w-[148px] h-[200px] left-[6px] top-[15px] bg-gradient-to-b from-[#b9b9b9] via-[#f2f2f2] to-[#b8b8b8]"></div>
        <div className="flip-inner-bg absolute w-[140px] h-[104px] left-[10px] top-[63px] bg-[#585858]/40"></div>
        <div className="flip-deco-r absolute w-[8px] h-[100px] bg-white right-[6px] top-[65px]"></div>
        <div className="flip-deco-l absolute w-[8px] h-[100px] bg-white left-[6px] top-[65px]"></div>
        <div className="flip-deco-t absolute w-4 h-[30px] bg-[#dedede] rounded-bl-[5px] rounded-br-[5px] shadow top-0 left-[72px]" />
        <FlipPages targetNumber={targetNumber} />
      </div>
      {/* <div className="mt-4">
        <input
          type="number"
          id="targetNumber"
          min="0"
          max="63"
          value={targetNumber}
          onChange={handleTargetChange}
        />
      </div> */}
    </>
  );
}
