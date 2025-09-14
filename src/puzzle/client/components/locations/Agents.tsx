"use client";

import React, { FC } from "react";

import { LocationContainer } from "@/puzzle/client/components/widgets/LocationContainer";
import { MagnifyingGlass } from "@/puzzle/client/components/widgets/MagnifyingGlass";
import { RoomArrow } from "@/puzzle/client/components/widgets/RoomArrow";
import { useStore } from "@/puzzle/client/store/store";
import { GameLocation } from "@/puzzle/domain-model";

export const Agents: FC = () => {
  const { navigate } = useStore();
  return (
    <LocationContainer name="Agenten" gameLocation={GameLocation.AGENTS}>
      <MagnifyingGlass
        className="absolute top-[55%] left-[50%]"
        onClick={() => navigate(GameLocation.AGENT_STOPPSCHILD)}
      />
      <MagnifyingGlass
        className="absolute top-[65%] left-[80%]"
        onClick={() => navigate(GameLocation.AGENT_BRAUTKLEID)}
      />
      <RoomArrow
        className="absolute top-[85%] left-[92%]"
        onClick={() => navigate(GameLocation.SAFEHOUSE)}
      />
    </LocationContainer>
  );
};
