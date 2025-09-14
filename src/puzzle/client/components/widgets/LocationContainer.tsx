"use client";

import React, { FC, PropsWithChildren, useState } from "react";

import clsx from "clsx";
import Image from "next/image";

import { FadeIn } from "@/puzzle/client/components/widgets/FadeIn";
import { getLocationImageUrl } from "@/puzzle/client/location-images";
import { useStore } from "@/puzzle/client/store/store";
import { GameLocation } from "@/puzzle/domain-model";

interface Props {
  name: string;
  gameLocation: GameLocation;
}

export const LocationContainer: FC<PropsWithChildren<Props>> = ({
  gameLocation,
  name,
  children,
}) => {
  const { gameLocation: currentLocation } = useStore();
  const [loading, setLoading] = useState(true);

  if (currentLocation !== gameLocation) {
    return null;
  }
  return (
    <div className="relative inline-block">
      <FadeIn>
        <Image
          width={1024}
          height={800}
          quality={90}
          className={clsx(
            "object-contain object-center transition-all duration-300",
            loading ? "opacity-1" : "opacity-100",
          )}
          priority={[
            GameLocation.HEALTH_WARNING_AND_PRIVACY,
            GameLocation.SAFEHOUSE,
          ].includes(gameLocation)}
          src={getLocationImageUrl(gameLocation)}
          alt={`Hintergrund: ${name}`}
          onLoad={() => setLoading(false)}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </FadeIn>
    </div>
  );
};
