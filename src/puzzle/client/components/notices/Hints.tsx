"use client";

import React, { FC, useState } from "react";

import { useStore } from "@/puzzle/client/store/store";
import { Hint } from "@/puzzle/domain-model";

export const Hints: FC = () => {
  const { hints, riddleKey, requestNextHint } = useStore();
  const [openKey, setOpenKey] = useState<number | null>(null);

  const canRequestNextHint = hints.every(
    (hint) => hint.key !== riddleKey || !hint.last,
  );

  const grouped = hints.reduce<Record<number, Hint[]>>((acc, hint) => {
    acc[hint.key] = acc[hint.key] || [];
    acc[hint.key].push(hint);
    return acc;
  }, {});

  const keys = Object.keys(grouped)
    .map((k) => parseInt(k, 10))
    .sort((a, b) => a - b);

  return (
    <>
      <div className="flex flex-col gap-2">
        <p className="mb-2 text-sm">
          Wenn euch ein Rätsel besonders schwer fällt, könnt ihr hier Hinweise
          erhalten.
        </p>
        {keys.map((key) => {
          const hintList = grouped[key];
          const open = openKey === key;
          return (
            <div key={key} className="rounded bg-slate-900 shadow-sm">
              <button
                onClick={() => setOpenKey(open ? null : key)}
                className={`flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm font-medium transition-colors
                                ${
                                  open
                                    ? "text-cyan-400"
                                    : "text-gray-400 hover:text-cyan-300"
                                }`}
                aria-expanded={open}
              >
                <span
                  className={`transition-transform duration-200 ${
                    open ? "rotate-90" : "rotate-0"
                  }`}
                  aria-hidden="true"
                >
                  ▶
                </span>
                <span>Rätsel {key + 1}</span>
              </button>
              {open && (
                <div className="px-4 py-2 text-sm text-gray-300">
                  {hintList
                    .sort((a, b) => a.number - b.number)
                    .map((hint) => (
                      <p key={hint.number} className="mb-1">
                        <span className="font-bold">
                          Hinweis {hint.number + 1}:
                        </span>{" "}
                        {hint.link ? (
                          <a
                            type="external"
                            href={hint.link}
                            className="text-cyan-300 underline hover:text-cyan-400"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {hint.content}
                          </a>
                        ) : (
                          hint.content
                        )}
                      </p>
                    ))}
                </div>
              )}
            </div>
          );
        })}
        {!canRequestNextHint && (
          <p className="mb-2 text-sm">
            Zu Rätsel {riddleKey + 1} hat es keine weiteren Hinweise.
          </p>
        )}
      </div>
      {canRequestNextHint && (
        <button
          onClick={() => {
            requestNextHint();
            setOpenKey(riddleKey);
          }}
          className="mt-4 rounded bg-cyan-300 px-4 py-2 text-sm font-bold text-gray-900 hover:bg-cyan-400"
          aria-label="Einen weiteren Hinweis erhalten"
        >
          Hinweis zu Rätsel {riddleKey + 1} erhalten.
        </button>
      )}
    </>
  );
};
