import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../context/ThemeProvider";

const StackedBarChart = ({
  data,
  label = "Bar Graph",
  xlabel = "xval",
  ylabel = "yval",
  color,
  key1,
  key2,
  width = "500",
}) => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="barchart">
      <h3 style={{ textAlign: "center", marginBottom: "25px" }}>{label}</h3>

 <ResponsiveContainer width="100%" height={340}>


      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" niceTicks="snap125" />
        <YAxis width="auto" niceTicks="snap125" />
        <Tooltip
          cursor={{
            fill: "rgba(110, 107, 107, 0.24)",
          }}
           labelStyle={{
    color: "black",
  }}
        />
        <Legend  wrapperStyle={{
    color: theme === "dark" ? "#000" : "inherit",
  }} />
        <Bar dataKey={key1} stackId="a" fill="#8884d8" />
        <Bar dataKey={key2} stackId="a" fill="#3532bf" />
      </BarChart>
       </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChart;
