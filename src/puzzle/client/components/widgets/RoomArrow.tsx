import React, { FC } from "react";

import clsx from "clsx";

interface Props {
  onClick: () => void;
  className: string;
}

export const RoomArrow: FC<Props> = ({ onClick, className }) => (
  <div
    className={clsx(
      "size-14 scale-100 cursor-pointer transition-all duration-300 hover:scale-110",
      className,
    )}
    onClick={onClick}
  >
    <div className="absolute top-[37%] left-[28%] h-[50%] w-[20%] transform-[rotate(45deg)]">
      <div className="shadow-cyan-glow hover:shadow-cyan-glow-hover absolute inset-0 rounded-full bg-transparent transition-shadow" />
      <div className="absolute inset-0 rounded-full bg-black" />
    </div>
    <div className="absolute top-[13%] left-[28%] h-[50%] w-[20%] transform-[rotate(135deg)] mix-blend-multiply">
      <div className="shadow-cyan-glow hover:shadow-cyan-glow-hover absolute inset-0 rounded-full bg-transparent transition-shadow" />
      <div className="absolute inset-0 rounded-full bg-black" />
    </div>
    <div className="absolute h-full w-[20%] transform-[rotate(90deg)] mix-blend-multiply">
      <div className="shadow-cyan-glow hover:shadow-cyan-glow-hover mix absolute inset-0 rounded-full bg-transparent transition-shadow" />
      <div className="absolute inset-0 rounded-full bg-black" />
    </div>
  </div>
);
