"use client";

import React, { FC, PropsWithChildren } from "react";

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
  const [ready, setReady] = React.useState(false);

  if (currentLocation !== gameLocation) {
    return null;
  }
  return (
    <div className="relative inline-block">
      <FadeIn ready={ready}>
        <Image
          width={1024}
          height={800}
          quality={90}
          className="object-contain object-center"
          priority={[
            GameLocation.HEALTH_WARNING_AND_PRIVACY,
            GameLocation.SAFEHOUSE,
          ].includes(gameLocation)}
          src={getLocationImageUrl(gameLocation)}
          onLoad={() => setReady(true)}
          alt={`Hintergrund: ${name}`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </FadeIn>
    </div>
  );
};
