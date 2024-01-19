import { StepContextType, stepNumberProviderType } from "@/utils/types";
import { createContext, useContext, useState } from "react";


const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepNumberProvider: React.FC<stepNumberProviderType> = ({
  children,
}) => {
  const [step, setStep] = useState<number>(1);
  const [stepData, setStepData] = useState({});

  return (
    <StepContext.Provider value={{ step, setStep, stepData, setStepData }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => {
  const context = useContext(StepContext);
  if (context === undefined) {
    throw new Error("useNumber must be used within a StepNumberProvider");
  }
  return context;
};
