import { useStep } from "@/hook/stepContextHook";
import clsx from "clsx";
import React, { FormEvent } from "react";
import { PropertyDetails } from "../property-details";
import { UnitMax } from "../unit-mix";
import FinancingForm from "../financing";
import { Thankyou } from "../thankyou";
import { toast } from "react-toastify";

export const Container = () => {
  const { step: activeStep, setStep, stepData } = useStep();

  const handleStepComponents = () => {
    switch (activeStep) {
      case 1:
        return <PropertyDetails />;
      case 2:
        return <UnitMax />;
      case 3:
        return <FinancingForm />;
      case 4:
        return <Thankyou />;
      default:
        return null;
    }
  };

  const validateStepData = () => {
    const requiredFields = [
      {
        key: "propertyName",
        message:
          "Property Name is missing. Please go back and add property name.",
      },
      {
        key: "addressLine",
        message:
          "Address Line is missing. Please go back and add address line.",
      },
      {
        key: "country",
        message: "Country is missing. Please go back and add country.",
      },
      { key: "city", message: "City is missing. Please go back and add city." },
      {
        key: "postalCode",
        message: "Postal Code is missing. Please go back and add postal code.",
      },
      {
        key: "closeDate",
        message: "Close Date is missing. Please go back and add close date.",
      },
    ];

    for (const field of requiredFields) {
      if (!stepData[field.key]) {
        toast.error(field.message);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validateStepData()) {
        console.log('enenenne')
      return;
    }

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stepData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setStep(activeStep + 1);
      console.log(data);
    } catch (error) {
      console.error("Failed to submit:", error);
      toast.error("Failed to submit data.");
    }
  };

  return (
    <div
      className={clsx(
        "lg:relative lg:pl-[5.25rem] lg:mr-[4.75rem] lg:w-full lg:border-l-2"
      )}
    >
      <form onSubmit={handleSubmit} id="main-form">
        {handleStepComponents()}
      </form>
      {activeStep <= 3 && (
        <div className="flex justify-end items-center lg:w-full">
          {activeStep > 1 && (
            <button
              onClick={() => setStep(activeStep - 1)}
              type="button"
              className="mr-2 text-black border-none rounded-lg font-semibold mt-4"
            >
              Back
            </button>
          )}
          {activeStep < 3 && (
            <button
              onClick={() => setStep(activeStep + 1)}
              type="button"
              className="bg-green-800 mt-4 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50"
            >
              Continue
            </button>
          )}
          {activeStep === 3 && (
            <button
            onClick={handleSubmit}
              type="submit"
              className="bg-green-800 mt-4 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50"
            >
              Submit
            </button>
          )}
        </div>
      )}
    </div>
  );
};
