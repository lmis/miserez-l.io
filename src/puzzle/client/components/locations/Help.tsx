import { FC } from "react";

import { GameRules } from "@/puzzle/client/components/notices/GameRule";
import { Hints } from "@/puzzle/client/components/notices/Hints";
import { LegalNotice } from "@/puzzle/client/components/notices/LegalNotice";
import { Prologue } from "@/puzzle/client/components/notices/Prologue";
import { Accordion } from "@/puzzle/client/components/widgets/Accordion";
import { LocationContainer } from "@/puzzle/client/components/widgets/LocationContainer";
import { GameLocation } from "@/puzzle/domain-model";

export const Help: FC = () => {
  const accordionItems = [
    { title: "Einleitung", content: <Prologue /> },
    { title: "Regeln", content: <GameRules /> },
    { title: "Rätsel-Hinweise", content: <Hints /> },
    { title: "Rechtliches", content: <LegalNotice /> },
    {
      title: "Spielfortschritt zurücksetzen",
      content: (
        <>
          <p className="pb-4">
            Mit dem Klick auf &quot;Zurücksetzen&quot; werden alle gespeicherten
            Daten gelöscht und das Spiel startet von vorne. Diese Aktion kann
            nicht rückgängig gemacht werden.
          </p>
          <button
            onClick={() => {
              localStorage.clear();
              location.reload();
            }}
            className="mt-4 rounded bg-cyan-300 px-4 py-2 font-bold text-gray-900 hover:bg-cyan-400"
            aria-label="Spielfortschritt zurücksetzen"
          >
            Zurücksetzen
          </button>
        </>
      ),
    },
  ];

  return (
    <LocationContainer name="hilfe" gameLocation={GameLocation.HELP}>
      <div className="relative max-h-[95vh] w-full max-w-240 overflow-y-auto bg-slate-900 p-6 opacity-95 shadow-lg">
        <Accordion items={accordionItems} />
      </div>
    </LocationContainer>
  );
};
