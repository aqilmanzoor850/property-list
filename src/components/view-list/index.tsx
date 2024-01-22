import { useStep } from "@/hook/stepContextHook";
import { useCallback, useEffect, useState } from "react";

export const ViewList = () => {
  const { setStep, setStepData } = useStep();
  const [list, setList] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch("/api/submit", {
      method: "GET",
    });

    const data = await response.json();
    setList(data);
    console.log(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAddMore = useCallback(() => {
    setStepData({});
    setStep(1);
  }, [setStep, setStepData]);

  return (
    <div>
      <div className="py-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold leading-tight">
            Properties List
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Property Name
              </th>
              <th scope="col" className="py-3 px-6">
                Address Line
              </th>
              <th scope="col" className="py-3 px-6">
                Country
              </th>
              <th scope="col" className="py-3 px-6">
                City
              </th>
              <th scope="col" className="py-3 px-6">
                Postal Code
              </th>
              <th scope="col" className="py-3 px-6">
                Close Date
              </th>
            </tr>
          </thead>
          <tbody>
            {(list || []).map((item: any, index) => (
              <tr
                key={index}
                className="bg-white border-b border-gray-200 dark:bg-black-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="border border-gray-200 py-4 px-6 font-medium text-gray-900 whitespace-nowrap light:text-white"
                >
                  {item?.propertyName}
                </th>
                <td className="py-4 px-6 border border-gray-200">
                  {item?.addressLine}
                </td>
                <td className="py-4 px-6 border border-gray-200">
                  {item?.country}
                </td>
                <td className="py-4 px-6 border border-gray-200">
                  {item?.city}
                </td>
                <td className="py-4 px-6 border border-gray-200">
                  {item?.postalCode}
                </td>
                <td className="py-4 px-6 border border-gray-200">
                  {item?.closeDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-end">
        <button
          onClick={handleAddMore}
          className="bg-green-800 mt-4 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50"
        >
          Add More
        </button>
      </div>
    </div>
  );
};
