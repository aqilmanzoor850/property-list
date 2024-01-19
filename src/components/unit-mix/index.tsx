export const UnitMax = () => {
  return (
    <div>
      <div className="py-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold leading-tight">Rent Roll</h2>
          <div className="flex space-x-4">
            <button className="border-none flex items-center px-3 py-1 border rounded text-gray-700 border-gray-300 hover:bg-gray-100">
              Export template
            </button>

            <button className="border-none flex items-center px-3 py-1 border rounded text-gray-700 border-gray-300 hover:bg-gray-100">
              Import file
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                Type
              </th>
              <th scope="col" className="py-3 px-6">
                Rent
              </th>
              <th scope="col" className="py-3 px-6">
                Width (ft)
              </th>
              <th scope="col" className="py-3 px-6">
                Length (ft)
              </th>
              <th scope="col" className="py-3 px-6">
                Market Rent
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                SQFT/SQM
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(8)].map((_, index) => (
              <tr
                key={index}
                className="bg-white border-b border-gray-200 dark:bg-black-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="border border-gray-200 py-4 px-6 font-medium text-gray-900 whitespace-nowrap light:text-white"
                >
                  E22
                </th>
                <td className="py-4 px-6 border border-gray-200">Indoor</td>
                <td className="py-4 px-6 border border-gray-200">$160</td>
                <td className="py-4 px-6 border border-gray-200">10</td>
                <td className="py-4 px-6 border border-gray-200">20</td>
                <td className="py-4 px-6 border border-gray-200">
                  Market Rent
                </td>
                <td className="py-4 px-6 border border-gray-200">Rented</td>
                <td className="py-4 px-6 border border-gray-200">50</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
