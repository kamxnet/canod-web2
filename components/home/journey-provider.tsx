"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { intents, type IntentId } from "@/lib/home-navigation";

const JourneyContext = createContext<{ intent: IntentId; chooseIntent: (id: IntentId) => void }>({
  intent: "workspace",
  chooseIntent: () => {},
});

export function HomeJourney({ children }: { children: ReactNode }) {
  const [intent, chooseIntent] = useState<IntentId>("workspace");
  const category = intents.find(item => item.id === intent)!.category;
  return (
    <JourneyContext.Provider value={{ intent, chooseIntent }}>
      <div className="home-story" data-intent={intent} data-interest={category}>
        {children}
      </div>
    </JourneyContext.Provider>
  );
}

export function useJourney() { return useContext(JourneyContext); }
