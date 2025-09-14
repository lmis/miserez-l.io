import React, { FC } from "react";

export const LegalNotice: FC = () => (
  <div className="flex flex-col gap-2">
    <p>
      Dieses Spiel setzt keine Cookies und benutzt keine Third Party Cookies.
      Alle Spieldaten werden lokal gespeichert.
    </p>
    <p>
      Der Hosting-Provider (Vercel) kann einige technische Informationen über
      dein Gerät wie IP-Adresse oder User-Agent zu Audit- und Sicherheitszwecken
      protokollieren.
    </p>
    <p>Seite erstellt von Lionel Miserez. </p>
    <p>
      <a href="mailto:puzzle@miserez-l.io">puzzle@miserez-l.io</a>
    </p>
  </div>
);
