import React, { FC, useState } from "react";

type Item = {
  title: string;
  content: React.ReactNode;
};

type Props = {
  items: Item[];
};

export const Accordion: FC<Props> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            onClick={() => handleClick(idx)}
            className={`w-full px-4 py-2 text-left font-semibold transition-colors
              ${
                openIndex === idx
                  ? "bg-slate-900 text-cyan-400"
                  : "bg-slate-800 text-gray-400 hover:text-cyan-300"
              }`}
          >
            {item.title}
          </button>
          {openIndex === idx && (
            <div className="rounded-b border-3 border-cyan-800 bg-slate-900 px-4 py-3 text-gray-300 shadow">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
