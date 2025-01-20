"use client";

import { createContext, useContext, useState } from "react";

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

interface ReservationContextType {
  range: DateRange;
  setRange: (range: DateRange) => void;
  resetRange: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined,
);

const initialState: DateRange = {
  from: undefined,
  to: undefined,
};

function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <ReservationContext.Provider
      value={{
        range,
        setRange,
        resetRange,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);

  if (context === undefined) {
    throw new Error("context can not be used outside the ReservationProvider");
  }
  return context;
}

export { ReservationProvider, useReservation };
