"use client";

import React, { FC } from "react";

import clsx from "clsx";

import { NavButton } from "@/puzzle/client/components/nav/NavButton";
import { useStore } from "@/puzzle/client/store/store";
import { GameLocation } from "@/puzzle/domain-model";

interface Props {
  className: string;
}

export const NavBar: FC<Props> = ({ className }) => {
  const { back, navigate, scroll, gameLocation } = useStore();
  const showHelp = ![
    GameLocation.HELP,
    GameLocation.LEGAL_NOTICE,
    GameLocation.GAME_RULES,
    GameLocation.HEALTH_WARNING_AND_PRIVACY,
    GameLocation.PROLOGUE,
  ].includes(gameLocation);
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-4",
        className,
      )}
    >
      {showHelp && (
        <NavButton
          label="hilfe"
          onClick={() => navigate(GameLocation.HELP)}
          symbol="?"
        />
      )}
      {gameLocation !== GameLocation.HEALTH_WARNING_AND_PRIVACY && (
        <NavButton label="zurück" onClick={back} symbol="⬅" />
      )}
      {gameLocation === GameLocation.TERMINAL && (
        <>
          <NavButton
            label="nach-oben"
            onClick={() => scroll(-5)}
            symbol="⬆"
            holdable
          />
          <NavButton
            label="nach-unten"
            onClick={() => scroll(5)}
            symbol="⬇"
            holdable
          />
        </>
      )}
    </div>
  );
};
