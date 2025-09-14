"use client";

import React, { FC } from "react";

import { LocationContainer } from "@/puzzle/client/components/widgets/LocationContainer";
import { TextDisplay } from "@/puzzle/client/components/widgets/TextDisplay";
import { useStore } from "@/puzzle/client/store/store";
import { GameLocation } from "@/puzzle/domain-model";

export const AgentBrautkleid: FC = () => {
  const { back } = useStore();
  return (
    <LocationContainer
      name="Agentin Brautkleid"
      gameLocation={GameLocation.AGENT_BRAUTKLEID}
    >
      <TextDisplay
        onConfirm={back}
        ariaLabel="zurück"
        title="Agentin Brautkleid"
        confirmText="Zurück"
      >
        <p>
          &laquo;Brautkleid&raquo; ist bekannt für ihre Verschlüsselungs- und
          Entschlüsselungsexpertise. Kein Wunder, dass sie herbeigezogen wurde.
        </p>
        <p>
          Wer auch immer die Decknamen vergibt, hat wohl nicht gedacht, dass
          &laquo;Brautkleid&raquo; und &laquo;Blaukraut&raquo; mal zusammen
          arbeiten würden. &laquo;Blaukraut&raquo; bleibt
          &laquo;Blaukraut&raquo; und &laquo;Brautkleid&raquo; bleibt
          &laquo;Brautkleid&raquo;.
        </p>
      </TextDisplay>
    </LocationContainer>
  );
};
