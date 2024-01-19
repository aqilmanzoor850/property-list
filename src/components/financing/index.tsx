import { useStep } from "@/hook/stepContextHook";
import { FinaningFormInterface } from "@/utils/types";
import React, {
    FormEvent,
  FunctionComponent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

const FinancingForm: FunctionComponent = ({}) => {
  const { stepData, setStepData } = useStep();

  const handleAddLender = useCallback(() => {
    setStepData({
      lenders: [...(stepData.lenders || [""]), ""],
    });
  }, [setStepData, stepData.lenders]);

  const handleLenderChange = useCallback(
    (index: number, value: string) => {
      const updatedLenders = (stepData.lenders || [""]).map(
        (lender: string, i: number) => (i === index ? value : lender)
      );
      setStepData({
        lenders: updatedLenders,
      });
    },
    [setStepData, stepData.lenders]
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = event.target;
      setStepData({
        ...stepData,
        [name]: value,
      });
    },
    [setStepData, stepData]
  );

  useEffect(() => {
    if (!stepData.typeOfRate || !stepData.capitalization) {
      setStepData({
        ...stepData,
        ["typeOfRate"]: "fixed",
        ["capitalization"]: "monthly",
      });
    }
  }, [setStepData, stepData]);

  const handleTypeOfRateToggle = (e: FormEvent, name: string, value: string) => {
    e.preventDefault()
    setStepData({
      ...stepData,
      [name]: value,
    });
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl text-MarineBlue font-bold pb-2 lg:text-[2rem]">
        Financing
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {(stepData.lenders || [""]).map((lender: string, index: number) => (
            <div key={index} className="flex items-center mb-3">
              <input
                type="text"
                value={lender}
                name={`lender-${index}`}
                onChange={(e) => handleLenderChange(index, e.target.value)}
                className="border-2 border-gray-300 p-2 rounded-lg w-full"
                placeholder={`Lender ${index + 1}`}
              />
              {index === (stepData.lenders || [""]).length - 1 && (
                <button
                  onClick={handleAddLender}
                  className="ml-2 text-black p-2 border rounded-lg shadow-lg w-12"
                  aria-label="Add lender"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="md:col-span-3" />

        <div>
          <label
            htmlFor="loan-amount"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Loan Amount
          </label>
          <input
            type="number"
            name="loan"
            id="loan-amount"
            className="mt-2 block w-full pl-3 pr-3 py-2 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 sm:text-sm"
            value={stepData.loan}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="start-date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Start Date
          </label>
          <div className="mt-2 relative">
            <input
              type="date"
              name="startDate"
              id="start-date"
              className="block w-full pl-3 pr-3 py-2 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 sm:text-sm"
              placeholder="mm/dd/yyyy"
              value={stepData.startDate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <label className="text-gray-700">Type of Rate</label>
          <div className="flex">
            <button
              className={`px-20 py-2 ${
                stepData.typeOfRate === "fixed" || !stepData.typeOfRate
                  ? "bg-gray-300"
                  : "bg-white"
              } border rounded-l-lg`}
              onClick={(e) => handleTypeOfRateToggle(e, "typeOfRate", "fixed")}
            >
              Fixed
            </button>
            <button
              className={`px-20 py-2 ${
                stepData.typeOfRate === "variable" ? "bg-gray-300" : "bg-white"
              } border rounded-r-lg`}
              onClick={(e) => handleTypeOfRateToggle(e, "typeOfRate", "variable")}
            >
              Variable
            </button>
          </div>
        </div>
        {/* <div className="lg:col-span-1 md:col-span-0" /> */}
        <div>
          <label className="text-gray-700">Interest Rate</label>
          <input
            type="number"
            name="interest"
            id="interest-rate"
            className="mt-2 block w-full pl-3 pr-3 py-2 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 sm:text-sm"
            value={stepData.interest}
            onChange={handleInputChange}
          />
        </div>
        <div className="md:col-span-2" />
        <div className="md:col-span-2">
          <label className="text-gray-700">Capitalization</label>
          <div className="flex">
            <button
              className={`px-20 py-2 ${
                stepData.capitalization === "monthly" ||
                !stepData.capitalization
                  ? "bg-gray-300"
                  : "bg-white"
              } border rounded-l-lg`}
              onClick={(e) =>
                handleTypeOfRateToggle(e, "capitalization", "monthly")
              }
            >
              Monthly
            </button>
            <button
              className={`px-20 py-2 ${
                stepData.capitalization === "semi-annual"
                  ? "bg-gray-300"
                  : "bg-white"
              } border rounded-r-lg`}
              onClick={(e) =>
                handleTypeOfRateToggle(e, "capitalization", "semi-annual")
              }
            >
              Semi-Annual
            </button>
          </div>
        </div>
        <div >
          <label className="text-gray-700">Interest Only Period</label>
          <input
            type="number"
            name="period"
            id="period"
            className="mt-2 block w-full pl-3 pr-3 py-2 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 sm:text-sm"
            value={stepData.period}
            onChange={handleInputChange}
          />
        </div>
        <div >
          <label className="text-gray-700">Term</label>
          <input
            type="number"
            name="term"
            id="term"
            className="mt-2 block w-full pl-3 pr-3 py-2 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 sm:text-sm"
            value={stepData.term}
            onChange={handleInputChange}
          />
        </div>
        <div >
          <label className="text-gray-700">Amortization</label>
          <input
            type="number"
            name="amortization"
            id="amortization"
            className="mt-2 block w-full pl-3 pr-3 py-2 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 sm:text-sm"
            value={stepData.amortization}
            onChange={handleInputChange}
          />
        </div>
        <div >
          <label className="text-gray-700">Financing Fees</label>
          <input
            type="number"
            name="financingFees"
            id="financingFees"
            className="mt-2 block w-full pl-3 pr-3 py-2 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 sm:text-sm"
            value={stepData.financingFees}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FinancingForm;
