import { Game } from "@/puzzle/client/components/Game";
import { MobileNotice } from "@/puzzle/client/components/notices/MobileNotice";
import { getNextQuestionOrCongratulations } from "@/puzzle/server/service/riddles";

export const PuzzleMain = async () => {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <MobileNotice />
      <Game initialItem={getNextQuestionOrCongratulations(0)} />
    </main>
  );
};
