import {
  FaBuilding,
  FaUsers,
  FaMoneyBillWave,
  FaTools,
  FaHome,
  FaClipboardList,
} from "react-icons/fa";
import Layout from "../layouts/Layout";

export default function Dashboard() {
  const stats = [
    {
      title: "Properties",
      value: "12",
      icon: <FaBuilding />,
      color: "bg-blue-500",
    },
    {
      title: "Tenants",
      value: "132",
      icon: <FaUsers />,
      color: "bg-green-500",
    },
    {
      title: "Monthly Revenue",
      value: "KES 1.2M",
      icon: <FaMoneyBillWave />,
      color: "bg-purple-500",
    },
    {
      title: "Maintenance Requests",
      value: "8",
      icon: <FaTools />,
      color: "bg-red-500",
    },
  ];

  const recentActivities = [
    "John Doe paid rent for Unit A-12",
    "New maintenance request submitted",
    "Electrician assigned to repair task",
    "Tenant moved into Unit B-07",
    "Property inspection completed",
  ];

  return (
    <Layout>
    <div className="min-h-screen bg-gray-100">

      <div className="flex">

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Dashboard Overview
          </h2>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500">{item.title}</p>
                    <h3 className="text-3xl font-bold mt-2">
                      {item.value}
                    </h3>
                  </div>

                  <div
                    className={`${item.color} text-white p-4 rounded-full text-2xl`}
                  >
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Occupancy */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">
                Occupancy Summary
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <span>Occupied Units</span>
                    <span>132</span>
                  </div>

                  <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
                    <div className="bg-green-500 h-3 rounded-full w-[88%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between">
                    <span>Vacant Units</span>
                    <span>18</span>
                  </div>

                  <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
                    <div className="bg-red-500 h-3 rounded-full w-[12%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">
                Maintenance Status
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Pending</span>
                  <span className="text-red-500 font-bold">8</span>
                </div>

                <div className="flex justify-between">
                  <span>In Progress</span>
                  <span className="text-yellow-500 font-bold">5</span>
                </div>

                <div className="flex justify-between">
                  <span>Completed</span>
                  <span className="text-green-500 font-bold">24</span>
                </div>
              </div>
            </div>

            {/* Workers */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">
                Skilled Workers
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Electricians</span>
                  <span>20</span>
                </div>

                <div className="flex justify-between">
                  <span>Plumbers</span>
                  <span>15</span>
                </div>

                <div className="flex justify-between">
                  <span>Painters</span>
                  <span>10</span>
                </div>

                <div className="flex justify-between">
                  <span>Cleaners</span>
                  <span>35</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-md p-6 mt-8">
            <h3 className="text-xl font-bold mb-4">
              Recent Activities
            </h3>

            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="border-b pb-3 last:border-none"
                >
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
    </Layout>
  );
}