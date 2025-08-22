'use client';

import React, {  } from "react";

export default function DashboardPage() {

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Welcome back! Here's a quick overview of your dashboard.
        </p>
        <div className="mt-2 text-sm text-blue-600 bg-blue-100 px-3 py-1 inline-block rounded">
          ⚠️ This is a demo dashboard. Data shown is for illustration only.
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard title="Total Users" value="1,250" />
        <StatsCard title="Sales Today" value="$3,200" />
        <StatsCard title="New Signups" value="85" />
        <StatsCard title="Active Sessions" value="142" />
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-2 flex justify-between text-gray-600">
            <span>John Doe signed up</span>
            <span className="text-sm">2 hours ago</span>
          </li>
          <li className="py-2 flex justify-between text-gray-600">
            <span>Payment of $299 received</span>
            <span className="text-sm">4 hours ago</span>
          </li>
          <li className="py-2 flex justify-between text-gray-600">
            <span>Server backup completed</span>
            <span className="text-sm">6 hours ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// StatsCard component
function StatsCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
    </div>
  );
}
