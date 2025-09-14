import React, { FC } from "react";

export const GameRules: FC = () => (
  <div className="flex flex-col gap-2">
    <p>
      Dies ist ein Rätselspiel. Die Lösungen werden jeweils im Terminal am
      mysteriösen KC85/3 eingetippt.
    </p>
    <p className="pt-2">
      Bei manchen Rätseln kann es helfen ein kleines Programm zu schreiben, in
      welches ihr die Rätseltexte kopiert.{" "}
      <strong>
        Es muss allerdings nie programmatisch mit dieser Webseite oder dem
        dazugehörigen Backend interagiert werden.
      </strong>
    </p>
    <p>
      Insbesondere Brute-Force Versuche, die Lösung zu erraten sind nicht
      zielführend und nicht erlaubt und können vom Hosting Provider als Angriff
      gesehen werden.
    </p>
  </div>
);
