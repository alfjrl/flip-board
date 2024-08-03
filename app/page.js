import FlipComponent from "@/components/FlipComponent";

export default function Home() {
  const targetNumbers = [
    1, 1, 1, 0, 0, 13, 0, 13, 34, 0, 0, 2, 0, 21, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
  ];

  // Ensure we have exactly 132 numbers
  if (targetNumbers.length !== 56) {
    console.warn(
      `Warning: You need to provide exactly 132 target numbers. Current count: ${targetNumbers.length}`
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
