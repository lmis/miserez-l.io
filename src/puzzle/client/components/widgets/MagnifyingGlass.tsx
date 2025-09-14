import React, { FC } from "react";

import clsx from "clsx";

interface Props {
  onClick: () => void;
  className: string;
}

export const MagnifyingGlass: FC<Props> = ({ onClick, className }) => (
  <div
    className={clsx(
      "shadow-cyan-glow hover:shadow-cyan-glow-hover size-9 scale-100 cursor-pointer rounded-full border-2 border-cyan-300 bg-transparent transition-all duration-300 hover:scale-110",
      className,
    )}
    onClick={onClick}
  >
    <div className="absolute top-[70%] left-[110%] h-full w-[20%] transform-[rotate(-45deg)]">
      <div className="shadow-cyan-glow hover:shadow-cyan-glow-hover absolute inset-0 top-[55%] rounded-b-full bg-transparent transition-shadow" />
      <div className="absolute inset-0 rounded-b-full bg-black" />
    </div>
  </div>
);
