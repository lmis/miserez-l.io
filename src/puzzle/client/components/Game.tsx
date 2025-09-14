"use client";

import React, { FC, useEffect, useState } from "react";

import { useIsLg } from "@/lib/media-queries";
import { Locations } from "@/puzzle/client/components/locations/Locations";
import { NavBar } from "@/puzzle/client/components/nav/NavBar";
import { getLocationImageUrl } from "@/puzzle/client/location-images";
import { useStore } from "@/puzzle/client/store/store";
import { TerminalItem } from "@/puzzle/domain-model";

interface Props {
  initialItem: TerminalItem;
}
export const Game: FC<Props> = ({ initialItem }) => {
  const { gameLocation, initialize } = useStore();
  const [displayedImageUrl, setDisplayedImageUrl] = useState(
    getLocationImageUrl(gameLocation),
  );
  const [loaded, setLoaded] = useState(false);
  const isLg = useIsLg();

  useEffect(() => {
    (async () => {
      await initialize(isLg ? 60 : 28, initialItem);
      setLoaded(true);
    })();
  }, [initialItem, initialize, isLg]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "F6") {
        alert(
          "Gute Idee, aber nicht nötig. Das Spiel benötigt keine speziellen Tasten - Eintippen im mysteriösen Terminal reicht völlig aus. :)",
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    console.log(
      "%cHier müsst ihr nichts suchen. Alles was ihr braucht ist durch normales Interagieren mit dem Spiel erreichbar.",
      "font-size: 1rem; font-weight: bold;",
    );
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const newUrl = getLocationImageUrl(gameLocation);
    if (newUrl === displayedImageUrl) {
      return;
    }

    const img = new window.Image();
    img.src = newUrl;
    img.onload = () => setDisplayedImageUrl(newUrl);
  }, [gameLocation, displayedImageUrl]);

  if (!loaded) {
    return null;
  }

  return (
    <div className="flex size-full items-center justify-center">
      <div className="absolute inset-0 -z-40 bg-black" />
      <div
        className="absolute inset-0 -z-40 bg-cover bg-center bg-no-repeat blur-[100px] transition-all duration-1200"
        style={{
          backgroundImage: `url(${displayedImageUrl})`,
        }}
      />
      <NavBar className="absolute top-8 right-8 z-40" />
      <Locations />
    </div>
  );
};
