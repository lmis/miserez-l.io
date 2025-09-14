"use client";

import React, { FC } from "react";

import { GameRules } from "@/puzzle/client/components/notices/GameRule";
import { HealthWarningAndPrivacy } from "@/puzzle/client/components/notices/HealthWarningAndPrivacy";
import { LegalNotice } from "@/puzzle/client/components/notices/LegalNotice";
import { Prologue } from "@/puzzle/client/components/notices/Prologue";
import { LocationContainer } from "@/puzzle/client/components/widgets/LocationContainer";
import { TextDisplay } from "@/puzzle/client/components/widgets/TextDisplay";
import { useStore } from "@/puzzle/client/store/store";
import { GameLocation } from "@/puzzle/domain-model";

export const Introduction: FC = () => {
  const { back, navigate } = useStore();

  return (
    <>
      <LocationContainer
        name="Gesundheits und Datenschutzhinweid"
        gameLocation={GameLocation.HEALTH_WARNING_AND_PRIVACY}
      >
        <TextDisplay
          onConfirm={() => navigate(GameLocation.GAME_RULES)}
          ariaLabel="Gesundheitshinweis akzeptieren"
          title="Gesundheits und Datenschutzhinweis"
          confirmText="Akzeptieren"
        >
          <HealthWarningAndPrivacy />
        </TextDisplay>
      </LocationContainer>
      <LocationContainer
        name="Rechtliches"
        gameLocation={GameLocation.LEGAL_NOTICE}
      >
        <TextDisplay
          onConfirm={back}
          ariaLabel="Rechtliches schließen"
          title="Rechtliches"
          confirmText="Schließen"
        >
          <LegalNotice />
        </TextDisplay>
      </LocationContainer>
      <LocationContainer
        name="Spielregeln"
        gameLocation={GameLocation.GAME_RULES}
      >
        <TextDisplay
          onConfirm={() => navigate(GameLocation.PROLOGUE)}
          ariaLabel="Spielregeln verstanden"
          title="Spielregeln"
          confirmText="Verstanden"
        >
          <GameRules />
        </TextDisplay>
      </LocationContainer>
      <LocationContainer name="Einleitung" gameLocation={GameLocation.PROLOGUE}>
        <TextDisplay
          onConfirm={() => {
            navigate(GameLocation.SAFEHOUSE);
          }}
          ariaLabel="Einleitung schließen"
          title="Westberlin, September 1986"
          confirmText="Spiel starten"
        >
          <Prologue />
        </TextDisplay>
      </LocationContainer>
    </>
  );
};
