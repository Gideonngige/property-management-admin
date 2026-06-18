import Layout from "../layouts/Layout";
import {
  FaSearch,
  FaPlus,
  FaPhone,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";

export default function Tenants() {
  const tenants = [
    {
      id: 1,
      name: "John Mwangi",
      email: "john@gmail.com",
      phone: "+254712345678",
      property: "Green Park Apartments",
      unit: "A-12",
      rent: "KES 15,000",
      status: "Paid",
    },
    {
      id: 2,
      name: "Mary Wanjiku",
      email: "mary@gmail.com",
      phone: "+254723456789",
      property: "Sunrise Residency",
      unit: "B-07",
      rent: "KES 18,000",
      status: "Pending",
    },
    {
      id: 3,
      name: "David Kiptoo",
      email: "david@gmail.com",
      phone: "+254734567890",
      property: "Royal Heights",
      unit: "C-15",
      rent: "KES 22,000",
      status: "Paid",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Tenants
            </h1>
            <p className="text-gray-500">
              Manage all tenants across your properties
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2">
            <FaPlus />
            Add Tenant
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-gray-500">Total Tenants</h3>
            <p className="text-3xl font-bold mt-2">132</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-gray-500">Paid</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">
              120
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-gray-500">Pending</h3>
            <p className="text-3xl font-bold text-orange-500 mt-2">
              12
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-gray-500">Occupancy Rate</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              90%
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="relative">
            <FaSearch className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search tenants..."
              className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Tenants Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-6 py-4">Tenant</th>
                  <th className="text-left px-6 py-4">Property</th>
                  <th className="text-left px-6 py-4">Unit</th>
                  <th className="text-left px-6 py-4">Rent</th>
                  <th className="text-left px-6 py-4">Status</th>
                  <th className="text-left px-6 py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {tenants.map((tenant) => (
                  <tr
                    key={tenant.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <FaUserCircle className="text-4xl text-gray-400" />

                        <div>
                          <h4 className="font-semibold">
                            {tenant.name}
                          </h4>

                          <div className="text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                              <FaEnvelope size={12} />
                              {tenant.email}
                            </div>

                            <div className="flex items-center gap-2">
                              <FaPhone size={12} />
                              {tenant.phone}
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      {tenant.property}
                    </td>

                    <td className="px-6 py-4">
                      {tenant.unit}
                    </td>

                    <td className="px-6 py-4 font-semibold">
                      {tenant.rent}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          tenant.status === "Paid"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {tenant.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="bg-blue-100 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-200">
                          View
                        </button>

                        <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}