import { ReactNode } from "react";

export type stepListType = {
  id: number;
  name: string;
};

export type stepNumberProviderType = {
  children: ReactNode;
};

export interface StepCompProps {
  id: number;
  name: string;
  activeStep: number;
}

export interface StepContextType {
  step: number;
  setStep: (number: number) => void;
  setStepData: (data: any) => void;
  stepData: any;
}

export interface FinaningFormInterface {
  typeOfRate: string;
  interestCapitalization: string;
  handleTypeOfRateToggle: (typeRate: string) => void;
  handleInterestCapitalizationToggle: (capitalization: string) => void;
}
