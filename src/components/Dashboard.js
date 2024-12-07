import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import './Dashboard.css';

const data = [
  { name: 'Products', value: 5 },
  { name: 'Brands', value: 3 },
  { name: 'Orders', value: 22 },
  { name: 'Revenue', value: 450 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl">Total Products</h2>
          <p className="text-3xl">5</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl">Total Brands</h2>
          <p className="text-3xl">3</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl">Total Orders</h2>
          <p className="text-3xl">22</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl">Total Revenue</h2>
          <p className="text-3xl">$450</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.name === 'Revenue' ? '#82ca9d' : '#8884d8'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;

