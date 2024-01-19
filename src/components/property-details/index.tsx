import { useStep } from "@/hook/stepContextHook";
import { useCallback } from "react";

export const PropertyDetails = () => {
  const { stepData, setStepData } = useStep();

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
  
  return (
    <div className="mt-10">
      <h2 className="text-2xl text-MarineBlue font-bold pb-2 lg:text-[2rem]">
        Property details
      </h2>
      <p className="text-gray-400 pr-4 pb-6 lg:pb-9">Property detail</p>

      <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
        <div className="sm:col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Property Name
          </label>
          <input
            type="text"
            name="propertyName"
            id="propertyName"
            className="mt-2 block w-full pl-3 pr-3 py-2 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 sm:text-sm"
            placeholder="Property Name"
            value={stepData.propertyName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="sm:col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Address Line
          </label>
          <input
            type="text"
            name="addressLine"
            id="addressLine"
            className="mt-2 block w-full pl-3 pr-3 py-2 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 sm:text-sm"
            placeholder="Address Line"
            value={stepData.addressLine}
            onChange={handleInputChange}
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Country
          </label>
          <select
            id="country"
            name="country"
            className="mt-2 block w-full pl-3 pr-3 py-2 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 sm:text-sm"
            defaultValue=""
            value={stepData.country}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select Country
            </option>
            <option value={"USA"}>USA</option>
            <option value={"Canada"}>Canada</option>
            <option value={"UK"}>UK</option>
          </select>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            City
          </label>
          <select
            id="city"
            name="city"
            className="mt-2 block w-full pl-3 pr-3 py-2 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 sm:text-sm"
            defaultValue=""
            value={stepData.city}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select City
            </option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="postal-code"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            id="postal-code"
            className="mt-2 block w-full pl-3 pr-3 py-2 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 sm:text-sm"
            placeholder="Postal Code"
            value={stepData.postalCode}
            onChange={handleInputChange}
          />
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="close-date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Close Date
          </label>
          <div className="mt-2 relative">
            <input
              type="date"
              name="closeDate"
              id="close-date"
              className="block w-full pl-3 pr-3 py-2 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 sm:text-sm"
              placeholder="mm/dd/yyyy"
              value={stepData.closeDate}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
