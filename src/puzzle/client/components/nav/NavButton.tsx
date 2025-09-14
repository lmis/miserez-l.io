"use client";

import React, {
  FC,
  MouseEventHandler,
  TouchEventHandler,
  useEffect,
  useRef,
} from "react";

interface Props {
  label: string;
  onClick: () => void;
  symbol: string;
  holdable?: boolean;
}

export const NavButton: FC<Props> = ({ label, onClick, symbol, holdable }) => {
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const onMouseDown: MouseEventHandler & TouchEventHandler = (e) => {
    if ("button" in e && e.button !== 0) {
      return;
    }
    onClick();
    intervalId.current = setInterval(onClick, 10);
  };

  const onMouseUp: MouseEventHandler & TouchEventHandler = (e) => {
    if ("button" in e && e.button !== 0) {
      return;
    }
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  return (
    <button
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-cyan-300 text-xl font-bold text-gray-900 transition hover:bg-cyan-400"
      aria-label={label}
      onClick={
        !holdable
          ? (e) => {
              e.currentTarget.blur();
              onClick();
            }
          : undefined
      }
      onMouseDown={holdable ? onMouseDown : undefined}
      onMouseUp={holdable ? onMouseUp : undefined}
      onMouseLeave={holdable ? onMouseUp : undefined}
      onTouchStart={holdable ? onMouseDown : undefined}
      onTouchEnd={holdable ? onMouseUp : undefined}
    >
      {symbol}
    </button>
  );
};
