"use client";

import React, { FC } from "react";

import { useStore } from "@/puzzle/client/store/store";
import { GameLocation } from "@/puzzle/domain-model";

export const HealthWarningAndPrivacy: FC = () => {
  const { navigate } = useStore();
  return (
    <>
      <p className="font-bold">
        Warnung: Dieses Spiel enthält Bewegungsgrafiken und flackernde Lichter.
      </p>

      <p>
        Mit Klicken auf &laquo;Akzeptieren&raquo; bestätigst du, dass du den
        Gesundheitshinweis gelesen und verstanden hast. Bitte beachte auch das{" "}
        <a
          href="#"
          className="inline-block text-cyan-400 underline hover:text-cyan-300 focus:text-cyan-300"
          aria-label="Datenschutzerklärung und Impressum lesen"
          onClick={(e) => {
            e.preventDefault();
            navigate(GameLocation.LEGAL_NOTICE);
          }}
        >
          Impressum und die Datenschutzerklärung
        </a>
        .
      </p>
    </>
  );
};
