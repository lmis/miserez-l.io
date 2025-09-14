"use client";

import React, { FC } from "react";

import { LocationContainer } from "@/puzzle/client/components/widgets/LocationContainer";
import { TextDisplay } from "@/puzzle/client/components/widgets/TextDisplay";
import { useStore } from "@/puzzle/client/store/store";
import { GameLocation } from "@/puzzle/domain-model";

export const CoffeeCup: FC = () => {
  const { back } = useStore();
  return (
    <LocationContainer name="Kaffeetasse" gameLocation={GameLocation.COFFE_CUP}>
      <TextDisplay
        onConfirm={back}
        ariaLabel="zurück"
        title="Kaffeetasse"
        confirmText="Zurück"
      >
        <p>
          &laquo;Blaukraut&raquo; scheint schon ganze Nächte vor diesem Rechner
          zu sitzen, wenn man den Zustand seiner Kaffeetasse betrachtet, auch
          die Melitta in der kleinen Küche ist schon fast leer. Mal sehen, was
          die Firma spendiert hat: Dallmayr oder Jacobs Krönung?
        </p>
      </TextDisplay>
    </LocationContainer>
  );
};
