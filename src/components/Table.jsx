import React, { useContext } from "react";
import "../css/components/table.css"
import { ThemeContext } from "../context/ThemeProvider";

const Table = ({ data, headers }) => {
  const columns = data?.length > 0 ? Object.keys(data[0]) : [];
  const {theme} = useContext(ThemeContext)
  return (
    <div>
      <table className={`table ${theme}`}>
        <thead className="tablehead">
          <tr className="trow">
            {headers?.map((cols) => (
              <th className="thead" key={cols.key}>{cols?.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody">
          {data?.map((row, index) => (
            <tr  className="trow" key={index}>
              {headers?.map((d) => (
                <td className="tdata" key={d.key}>{d?.cell(row)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
