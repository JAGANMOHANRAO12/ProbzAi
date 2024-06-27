import React, { useState } from 'react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

const ChartComponent: React.FC = () => {
  const [timeframe, setTimeframe] = useState('daily');

  const handleTimeframeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeframe(event.target.value);
  };

  return (
    <div>
      <h1>Chart</h1>
      <select onChange={handleTimeframeChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={[]}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
