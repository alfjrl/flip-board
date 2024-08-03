"use client";

import FlipComponent from "@/components/FlipComponent";

export default function Home() {
  const targetNumbers = [
    12, 45, 3, 58, 27, 9, 61, 33, 17, 52, 6, 39, 23, 55, 1, 48, 30, 14, 63, 36,
    8, 50, 19, 42, 2, 57, 25, 11, 46, 5, 60, 31, 16, 54, 7, 41, 22, 59, 0, 38,
    20, 49, 4, 62, 29, 13, 53, 35, 10, 44, 26, 56, 15, 37, 21, 51,
  ];

  // Ensure we have exactly 132 numbers
  if (targetNumbers.length !== 56) {
    console.warn(
      `Warning: You need to provide exactly 56 target numbers. Current count: ${targetNumbers.length}`
    );
  }

  // Create an array of 132 elements with controlled target numbers
  const flipComponents = Array.from({ length: 56 }, (_, index) => ({
    id: index + 1,
    target: targetNumbers[index],
    // target: targetNumbers[index] || Math.floor(Math.random() * 1000), // Fallback to random if target not provided
  }));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-[160px] py-[190px] bg-[#dedede]">
      <div className="page-base">
        {flipComponents.map(({ id, target }) => (
          <div className="component-wrap" key={id}>
            <FlipComponent key={id} target={target} />
            {/* <div>{target}</div> */}
          </div>
        ))}
      </div>
    </main>
  );
}
