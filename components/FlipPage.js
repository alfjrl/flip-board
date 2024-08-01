"use client";

const characters = [
  "",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "!",
  "@",
  "#",
  "$",
  "&",
  "(",
  ")",
  "-",
  "+",
  "=",
  ";",
  ":",
  "'",
  '"',
  "%",
  ",",
  ".",
  "?",
  "°",
  "/",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "black",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
];

export default function FlipPage({ isFlipped, front, back, order }) {
  return (
    <>
      <div
        className={`z-50 w-[140px] h-[90px] ${
          isFlipped ? "back-page" : "front-page"
        } ${order}`}
      >
        <div className="w-full h-full relative overflow-hidden">
          <div className="absolute">
            <div className="w-[140px] h-[40px] bg-white relative top-[0px]" />
            <div className="w-[128px] h-[50px] bg-white relative top-[0px] left-[6px]" />
          </div>
          <div
            className={` w-full relative top-[-26px] text-[160px] font-medium text-center uppercase ${
              isFlipped ? "back-page" : "front-page"
            }`}
          >
            {isFlipped ? characters[back] : characters[front]}
          </div>
        </div>
      </div>
    </>
  );
}
