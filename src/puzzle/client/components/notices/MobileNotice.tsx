"use client";

import React, { useState } from "react";

export const MobileNotice = () => {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <div className="absolute top-0 left-0 z-50 w-full rounded-b-2xl bg-stone-100/80 py-2 pr-12 pl-4 text-center text-stone-700 backdrop-blur-sm lg:hidden">
      <button
        className="absolute top-2 right-4 text-xl font-bold text-stone-400 hover:text-stone-600 focus:outline-none"
        aria-label="schließen"
        onClick={() => setHidden(true)}
      >
        &times;
      </button>
      Dieses Spiel ist für größere Bildschirme optimiert. Bitte besuche die
      Seite auf einem Desktop-Computer für die beste Erfahrung.
    </div>
  );
};
