import { FaPlus, FaSearch, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import Layout from "../layouts/Layout";

export default function Properties() {
  const properties = [
    {
      id: 1,
      name: "Green Park Apartments",
      location: "Nairobi",
      units: 50,
      occupied: 45,
      vacant: 5,
      revenue: "KES 450,000",
    },
    {
      id: 2,
      name: "Sunrise Residency",
      location: "Meru",
      units: 30,
      occupied: 25,
      vacant: 5,
      revenue: "KES 300,000",
    },
    {
      id: 3,
      name: "Royal Heights",
      location: "Nakuru",
      units: 40,
      occupied: 38,
      vacant: 2,
      revenue: "KES 520,000",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Properties
            </h1>
            <p className="text-gray-500">
              Manage all your properties in one place
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2">
            <FaPlus />
            Add Property
          </button>
        </div>

        {/* Search */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="relative">
            <FaSearch className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search property..."
              className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-gray-500">Total Properties</h3>
            <p className="text-3xl font-bold mt-2">12</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-gray-500">Total Units</h3>
            <p className="text-3xl font-bold mt-2">120</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-gray-500">Occupied</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">108</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-gray-500">Vacant</h3>
            <p className="text-3xl font-bold text-red-500 mt-2">12</p>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* Property Image */}
              <div className="h-48 bg-gray-200 rounded-t-xl flex items-center justify-center">
                <FaBuilding className="text-6xl text-gray-400" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  {property.name}
                </h3>

                <div className="flex items-center gap-2 text-gray-500 mt-2">
                  <FaMapMarkerAlt />
                  <span>{property.location}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-5">
                  <div>
                    <p className="text-gray-500 text-sm">Units</p>
                    <p className="font-bold">{property.units}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Occupied</p>
                    <p className="font-bold text-green-600">
                      {property.occupied}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Vacant</p>
                    <p className="font-bold text-red-500">
                      {property.vacant}
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t pt-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">
                      Monthly Revenue
                    </p>
                    <p className="font-bold text-blue-600">
                      {property.revenue}
                    </p>
                  </div>

                  <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}