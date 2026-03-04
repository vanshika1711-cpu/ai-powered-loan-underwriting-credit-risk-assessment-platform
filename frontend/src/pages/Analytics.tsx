import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", loans: 40, risk: 24 },
  { month: "Feb", loans: 32, risk: 13 },
  { month: "Mar", loans: 51, risk: 35 },
  { month: "Apr", loans: 27, risk: 19 },
  { month: "May", loans: 44, risk: 28 },
  { month: "Jun", loans: 36, risk: 21 },
];

export default function Analytics() {
  return (
    <div className="p-8 space-y-8">

      {/* PAGE TITLE */}

      <div>
        <h1 className="text-3xl font-bold">Advanced Analytics</h1>
        <p className="text-gray-500">
          Credit risk insights and loan performance overview
        </p>
      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6">
          <p className="text-gray-500 text-sm">Total Loans</p>
          <h2 className="text-3xl font-bold mt-2">1,284</h2>
        </div>

        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6">
          <p className="text-gray-500 text-sm">Approval Rate</p>
          <h2 className="text-3xl font-bold mt-2 text-green-500">78%</h2>
        </div>

        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6">
          <p className="text-gray-500 text-sm">Risk Score Avg</p>
          <h2 className="text-3xl font-bold mt-2 text-red-500">42</h2>
        </div>

        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6">
          <p className="text-gray-500 text-sm">Active Clients</p>
          <h2 className="text-3xl font-bold mt-2">356</h2>
        </div>

      </div>

      {/* CHARTS GRID */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* BAR CHART */}

        <div className="bg-white dark:bg-gray-900 shadow-xl rounded-xl p-6">
          <h2 className="mb-4 font-semibold text-lg">Loan Approvals</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="loans" fill="#6366f1" radius={[6,6,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PIE CHART */}

        <div className="bg-white dark:bg-gray-900 shadow-xl rounded-xl p-6">
          <h2 className="mb-4 font-semibold text-lg">Risk Distribution</h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="risk"
                nameKey="month"
                outerRadius={120}
                fill="#22c55e"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* AREA CHART */}

      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-xl p-6">
        <h2 className="mb-4 font-semibold text-lg">Risk Trend</h2>

        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="risk"
              stroke="#ef4444"
              fill="#fecaca"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}