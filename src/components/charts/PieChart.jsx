import React from "react";
import {
  Pie,
  PieChart,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

import "../../css/graphs.css";

const SimplePieChart = ({ data, label, colors = [] }) => {
  return (
    <div className="pie-chart" style={{ alignItems: "center" }}>
      <h3
        style={{
          textAlign: "center",
          marginBottom: "25px",
          marginTop: "10px",
        }}
      >
        {label}
      </h3>

      <ResponsiveContainer width="100%" height={340}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimplePieChart;