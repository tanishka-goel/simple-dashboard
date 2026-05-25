import React, { useContext } from "react";
import "../css/statcard.css";
import { ThemeContext } from "../context/ThemeProvider";
import { SimpleLineChart } from "./charts/LineCharts";
import { sparkData1 } from "../data/DummyData";
import { SparkLine } from "./charts/SparkLine";

const StatCards = ({
  data,
  heading,
  bgcolor,
  tcolor,
  border,
  icon: Icon,
  sparkdata,
  sparkColor,
  darkSparkColor
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`statcard ${theme}`}
      style={{ backgroundColor: `${bgcolor}`, border: `${border}` }}
    >
      <div className={`titlebar ${theme} `} style={{ "--tcolor": tcolor }}>
        {Icon && <Icon size={24} />}
        <p>{heading || "No Heading"}</p>
      </div>

      <div>
        <p className="stat">{data || "No stats found"}</p>
        <SparkLine color={theme==="light"?`${sparkColor}`:`${darkSparkColor}`} data={sparkdata} />
      </div>
    </div>
  );
};

export default StatCards;
