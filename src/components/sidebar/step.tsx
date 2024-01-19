import { StepCompProps } from "@/utils/types";
import clsx from "clsx";
import { FunctionComponent } from "react";

export const Step: FunctionComponent<StepCompProps> = ({
  id,
  name,
  activeStep,
}) => {
  const isCompleted = id < activeStep;
  const isActive = id === activeStep;
  return (
    <div className="items-center flex gap-x-5">
      <div
        className={clsx(
          "aspect-square w-4 rounded-[100%] border grid place-content-center",
          {
            "bg-black bg-white-500": isCompleted,
            " border-white text-black bg-gray-500 rounded-full m-auto":
              activeStep !== id,
            " bg-LightBlue bg-gray-500 rounded-full m-auto text-MarineBlue":
              activeStep === id,
          }
        )}
      >
        {isCompleted && (
          <svg
            className="w-4 h-4 text-white m-auto"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.47 9.53a.75.75 0 1 1 1.06-1.06l2.75 2.75 6.5-6.5a.75.75 0 0 1 1.06 0z"
            />
          </svg>
        )}
        {isActive && (
          <div className="w-2 h-2 bg-green-500 rounded-full m-auto"></div>
        )}
      </div>
      <div className="w-px h-6 bg-gray-300"></div>
      <div className="hidden lg:flex uppercase flex-col font-body">
        <p className=" text-sm text-black font-semibold tracking-wide">
          {name}
        </p>
      </div>
    </div>
  );
};
