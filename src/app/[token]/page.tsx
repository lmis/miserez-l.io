import { notFound } from "next/navigation";

import { PuzzleMain } from "@/puzzle/client/components/PuzzleMain";
import { PUZZLE_TOKEN } from "@/puzzle/server/env";

interface PageProps {
  params: Promise<{ token: string }>;
}

const Page = async ({ params }: PageProps) => {
  if ((await params).token === PUZZLE_TOKEN) {
    return <PuzzleMain />;
  }
  return notFound();
};

export default Page;
