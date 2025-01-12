"use client";

import { useState } from "react";

function TextExpander({ children }: { children: string }) {
  const [isExpand, setIsExpand] = useState(false);

  const displayedText = isExpand
    ? children
    : children.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span>
      {displayedText}{" "}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpand((isExpand) => !isExpand)}
      >
        {isExpand ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TextExpander;
