"use client";

import React, { FC } from "react";

import { LocationContainer } from "@/puzzle/client/components/widgets/LocationContainer";
import { TextDisplay } from "@/puzzle/client/components/widgets/TextDisplay";
import { useStore } from "@/puzzle/client/store/store";
import { GameLocation } from "@/puzzle/domain-model";

export const Ashtray: FC = () => {
  const { back } = useStore();
  return (
    <LocationContainer name="Aschenbecher" gameLocation={GameLocation.ASHTRAY}>
      <TextDisplay
        onConfirm={back}
        ariaLabel="zurück"
        title="Kippen"
        confirmText="Zurück"
      >
        <p>
          Die inoffizielle Währung des Ostens. Eine F6 hier, &apos;ne Karo da
          &ndash; so öffnet sich so manche Türe.
        </p>
        <p>
          &laquo;Schwungrad&raquo; rauchte immer was aus &apos;nem Volkseigenen
          Betrieb, die Westzigaretten nahm er nur zum Handeln.
        </p>
        <p>
          Hier brennt die Marlboro Light von &laquo;Blaukraut&raquo; &ndash;{" "}
          <span className="text-[7px]">♫♫</span> milde Sorte, denn das Leben ist
          schon hart genug <span className="align-super text-[7px]">♫♫</span>.
        </p>
      </TextDisplay>
    </LocationContainer>
  );
};
