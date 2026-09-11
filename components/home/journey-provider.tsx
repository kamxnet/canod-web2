"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { EditorialIntentId } from "@/lib/editorial";

const JourneyContext = createContext<{ intent: EditorialIntentId; chooseIntent: (id: EditorialIntentId) => void }>({
  intent: "workspace",
  chooseIntent: () => {},
});

export function HomeJourney({ children }: { children: ReactNode }) {
  const [intent, chooseIntent] = useState<EditorialIntentId>("workspace");
  return (
    <JourneyContext.Provider value={{ intent, chooseIntent }}>
      <div className="home-story" data-intent={intent}>
        {children}
      </div>
    </JourneyContext.Provider>
  );
}

export function useJourney() { return useContext(JourneyContext); }
