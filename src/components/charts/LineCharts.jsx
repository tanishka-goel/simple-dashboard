import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Label,
  ResponsiveContainer,
} from "recharts";
import "../../css/graphs.css";

export const SimpleLineChart = ({
  data,
  label = "Line Graph",
  xlabel,
  ylabel,
  color,
}) => {
  return (
    <div className="linechart">
      <h3
        style={{ textAlign: "center", marginBottom: "25px", marginTop: "10px" }}
      >
        {label}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
      <LineChart  data={data}>
        <XAxis dataKey="name" >
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
        <Tooltip />
        <Line type="monotone" dataKey="value" />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
