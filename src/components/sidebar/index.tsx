import { StepList } from "@/utils/stepsData";
import { stepListType } from "@/utils/types";
import { FunctionComponent } from "react";
import { Step } from "./step";
import { useStep } from "@/hook/stepContextHook";

export const Steps: FunctionComponent<any> = () => {
  const { step: activeStep } = useStep();
  return (
    <div className=" flex items-center justify-center gap-x-4 mt-[-5.5rem] lg:mt-0 lg:bg-sidebar-dt lg:h-[568px] lg:min-w-[274px] lg:flex-col lg:justify-start lg:items-start lg:gap-7 lg:p-8">
      {StepList.map((step: stepListType, index: number) => (
        <Step
          activeStep={activeStep}
          id={step.id}
          name={step.name}
          key={index}
        />
      ))}
    </div>
  );
};
