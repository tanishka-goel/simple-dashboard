import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  ResponsiveContainer,
} from "recharts";
import "../../css/components/graphs.css";

export const SimpleBarChart = ({
  data,
  label = "Bar Graph",
  xlabel,
  ylabel,
  color,
}) => {
  return (
    <div className="barchart">
      <h3 style={{ textAlign: "center", marginBottom: "25px" }}>{label}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name">
            <Label value={xlabel} offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label
              value={ylabel}
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip
            cursor={{
              fill: "rgba(110, 107, 107, 0.24)",
            }}
             labelStyle={{
    color: "black",
  }}
          />
          <Bar
            style={{ backgroundColor: "red" }}
            dataKey="value"
            fill={color}
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
