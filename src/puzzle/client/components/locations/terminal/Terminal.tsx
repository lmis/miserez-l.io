"use client";

import React, { FC } from "react";

import { useIsLg } from "@/lib/media-queries";
import {
  DesktopDisplay,
  MobileDisplay,
} from "@/puzzle/client/components/locations/terminal/Display";
import { LocationContainer } from "@/puzzle/client/components/widgets/LocationContainer";
import { useStore } from "@/puzzle/client/store/store";
import { GameLocation } from "@/puzzle/domain-model";

export const Terminal: FC = () => {
  const { scroll } = useStore();
  const isLg = useIsLg();
  return (
    <LocationContainer name="Terminal" gameLocation={GameLocation.TERMINAL}>
      {isLg ? (
        <div
          className="block h-[550px] w-[720px] translate-x-[-5px] translate-y-[-65px]"
          onWheel={(e) => {
            scroll(
              e.deltaY > 0 ? Math.max(e.deltaY, 15) : Math.min(e.deltaY, -15),
            );
          }}
        >
          <DesktopDisplay />
        </div>
      ) : (
        <div className="h-[90vh] w-screen">
          <MobileDisplay />
        </div>
      )}
    </LocationContainer>
  );
};
