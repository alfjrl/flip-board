"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import FlipPage from "./FlipPage";

export default function FlipPages({ targetNumber }) {
  const [pages, setPages] = useState(() => [
    { id: 2, front: 1, back: 2, isFlipped: false },
    { id: 1, front: 0, back: 1, isFlipped: false },
    { id: 0, front: 0, back: 0, isFlipped: false },
    ...Array(7)
      .fill(null)
      .map((_, index) => ({
        id: index + 3,
        front: "",
        back: "",
        isFlipped: true,
      })),
  ]);
  const nextId = useRef(10);
  const [isTargetReached, setIsTargetReached] = useState(false);

  const updatePages = useCallback(() => {
    setPages((prevPages) => {
      const front = prevPages[0].back % 64;
      const back = (prevPages[0].back + 1) % 64;
      const newPages = [
        {
          id: nextId.current++,
          front: front,
          back: back,
          isFlipped: false,
        },
        ...prevPages.map((page, index) =>
          index === 2 ? { ...page, isFlipped: true } : page
        ),
      ];
      const filteredPages = newPages.filter((_, index) => index !== 10);

      // Check if the third page's front matches the target number
      if (filteredPages[2].front === targetNumber) {
        setIsTargetReached(true);
      }

      return filteredPages;
    });
  }, [targetNumber]);

  useEffect(() => {
    if (isTargetReached) return;

    const intervalId = setInterval(updatePages, 300);
    return () => clearInterval(intervalId);
  }, [updatePages, isTargetReached]);

  return (
    <div className="flip-pages">
      <div className="flip-pages-base">
        {pages.map((page, index) => (
          <FlipPage
            key={page.id}
            isFlipped={page.isFlipped}
            front={page.front}
            back={page.back}
            order={`order-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
