import { useStep } from "@/hook/stepContextHook";
import { useCallback, useState } from "react";
import { ViewList } from "../view-list";

export const Thankyou = () => {
  const { step, setStep } = useStep();
  const [viewList, setViewList] = useState(false);

  const handleBack = useCallback(() => {
    setStep(step - 1);
  }, [setStep, step]);

  const handleViewList = useCallback(() => {
    setViewList(true);
  }, []);
  return viewList ? (
    <ViewList />
  ) : (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 14l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>

        <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
        <p className="mb-6">You have achieved something amazing.</p>

        <div className="flex flex-col">
          <button
            onClick={handleViewList}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4"
          >
            View list
          </button>
          <button
            onClick={handleBack}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
