"use client";

import React, { FC } from "react";

import { LocationContainer } from "@/puzzle/client/components/widgets/LocationContainer";
import { TextDisplay } from "@/puzzle/client/components/widgets/TextDisplay";
import { useStore } from "@/puzzle/client/store/store";
import { GameLocation } from "@/puzzle/domain-model";

export const Briefcase: FC = () => {
  const { back } = useStore();
  return (
    <LocationContainer
      name="Abgewetzter Lederkoffer"
      gameLocation={GameLocation.BRIEFCASE}
    >
      <TextDisplay
        onConfirm={back}
        ariaLabel="zurück"
        title="Abgewetzter Lederkoffer"
        confirmText="Zurück"
      >
        <p>
          Der Koffer ist aus braunem Leder, die Ecken sind abgewetzt, der Griff
          ist schon etwas eingerissen. Innen ist er mit grünem Stoff
          ausgekleidet, der schon etwas ausgeblichen ist.
          &laquo;Blaukraut&raquo; hat daraus den KC85/3 genommen, und Kassette
          um Kassette hineingeschoben. Kassette 2 enthält das merkwürdige
          Kinderspiel, die anderen hat &laquo;Blaukraut&raquo; schon
          durchgesehen &ndash; nichts Brauchbares.
        </p>
        <p>
          Sieht unscheinbar aus, dieser Koffer, dafür, dass
          &laquo;Schwungrad&raquo; sein Leben riskiert hat, als er damit durch
          den Lichtenberger Bahnhof lief. Er ging durch die Schalterhalle zu den
          Schliessfächern. Vierundvierzig, seine Glückszahl &ndash; zweite Reihe
          von unten, drittes Fach von rechts. Er legte den Koffer hinein,
          schloss das Fach ab, zündete sich eine F6 an und verschwand in der
          Menge.
        </p>
        <p>
          Wie &laquo;Blaukraut&raquo; damit lebend über die Grenze kam, will er
          nicht verraten, doch er lässt durchblicken, dass er gute Beziehungen
          zu den Amis pflegt, und die ihm noch einen Gefallen schuldig waren.
        </p>
      </TextDisplay>
    </LocationContainer>
  );
};
