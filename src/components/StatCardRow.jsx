import React from "react";
import "../css/components/statcard.css";
import StatCards from "./StatCards";
import { Users, Moon, Venus, Mars, Package } from "lucide-react";
import { sparkData1,sparkData2,sparkData3,sparkData4 } from "../data/DummyData";



const StatCardRow = ({users, female,male, products}) => {

    const statdata = [
  {
    heading: "Total Users",
    bgcolor: "rgba(255,255,255,0.08)",
    border: "1px solid #fff",
    icon: Users,
    data:users,
    tcolor:"#231940",
    sparkData:sparkData1,
    sparkColor:"#231940",
    darkSparkColor:"#7862b9"
  },

  {
    heading: "Female Users",
    bgcolor: "rgba(255,255,255,0.08)",
    border: "1px solid #fff",
    icon: Venus,
    data:female,
    tcolor:"#a673b9",
    sparkColor: "#a673b9",
    sparkData: sparkData2,
      darkSparkColor:"#a673b9"
  },
   {
    heading: "Male Users",
    bgcolor: "rgba(255,255,255,0.08)",
    border: "1px solid #fff",
    icon: Mars,
    data:male,
    sparkColor: "#60a5fa",
    sparkData: sparkData3,
      darkSparkColor:"#60a5fa"
  },
   {
    heading: "Total Products",
    bgcolor: "rgba(255,255,255,0.08)",
    border: "1px solid #fff",
    icon: Package,
    data:products,
     tcolor:"#192440",
      sparkColor: "#000",
    sparkData: sparkData4,
      darkSparkColor:"#96a0bafc"
  },
];

  return (
    <div className="stat-row">
      {statdata.map((data, index) => (
        <StatCards
        
          key={index}
          heading={data.heading}
          bgcolor={data.bgcolor}
          border={data.border}
          icon={data.icon}
          data={data.data}
          tcolor={data.tcolor}
          sparkColor={data.sparkColor}
          sparkdata={data.sparkData}
          darkSparkColor={data.darkSparkColor}
        />
      ))}
    </div>
  );
};

export default StatCardRow;