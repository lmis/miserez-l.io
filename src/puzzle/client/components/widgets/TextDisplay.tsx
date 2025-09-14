import React, { FC, PropsWithChildren } from "react";

interface Props {
  onConfirm: () => void;
  ariaLabel: string;
  title: string;
  confirmText: string;
}

export const TextDisplay: FC<PropsWithChildren<Props>> = ({
  onConfirm,
  ariaLabel,
  title,
  confirmText,
  children,
}) => (
  <div className="z-10 max-h-[95vh] max-w-240 overflow-y-auto rounded-lg bg-slate-900 p-8 text-gray-500 opacity-45 shadow-lg transition-all duration-300 hover:opacity-95 active:opacity-95">
    <h1 className="mb-2 text-2xl font-bold">{title}</h1>
    <div className="flex flex-col gap-2">{children}</div>
    {onConfirm && (
      <button
        onClick={onConfirm}
        className="mt-4 rounded bg-cyan-300 px-4 py-2 font-bold text-gray-900 hover:bg-cyan-400"
        aria-label={ariaLabel}
      >
        {confirmText}
      </button>
    )}
  </div>
);
