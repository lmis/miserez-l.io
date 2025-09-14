import { inexhaustive } from "@/lib/enum";
import { GameLocation } from "@/puzzle/domain-model";

export const getLocationImageUrl = (location: GameLocation) => {
  switch (location) {
    case GameLocation.HEALTH_WARNING_AND_PRIVACY:
    case GameLocation.ASHTRAY:
      return "/puzzle/ashtray.png";
    case GameLocation.COFFE_CUP:
      return "/puzzle/coffee-cup.png";
    case GameLocation.BRIEFCASE:
      return "/puzzle/briefcase.png";
    case GameLocation.TERMINAL:
    case GameLocation.GAME_RULES:
      return "/puzzle/terminal.png";
    case GameLocation.LEGAL_NOTICE:
    case GameLocation.HELP:
      return "/puzzle/wall.png";
    case GameLocation.PROLOGUE:
    case GameLocation.AGENTS:
      return "/puzzle/agents.png";
    case GameLocation.AGENT_BRAUTKLEID:
      return "/puzzle/agent-brautkleid.png";
    case GameLocation.AGENT_STOPPSCHILD:
      return "/puzzle/agent-stoppschild.png";
    case GameLocation.SAFEHOUSE:
      return "/puzzle/safehouse.png";
    default:
      return inexhaustive(location);
  }
};
