import { AgentBrautkleid } from "@/puzzle/client/components/locations/AgentBrautkleid";
import { AgentStoppschild } from "@/puzzle/client/components/locations/AgentStoppschild";
import { Agents } from "@/puzzle/client/components/locations/Agents";
import { Ashtray } from "@/puzzle/client/components/locations/Ashtray";
import { Briefcase } from "@/puzzle/client/components/locations/Briefcase";
import { CoffeeCup } from "@/puzzle/client/components/locations/CoffeCup";
import { Help } from "@/puzzle/client/components/locations/Help";
import { Introduction } from "@/puzzle/client/components/locations/Introduction";
import { Safehouse } from "@/puzzle/client/components/locations/Safehouse";
import { Terminal } from "@/puzzle/client/components/locations/terminal/Terminal";

export const Locations = () => (
  <>
    <Introduction />
    <Safehouse />
    <Agents />
    <AgentBrautkleid />
    <AgentStoppschild />
    <Ashtray />
    <Briefcase />
    <CoffeeCup />
    <Terminal />
    <Help />
  </>
);
