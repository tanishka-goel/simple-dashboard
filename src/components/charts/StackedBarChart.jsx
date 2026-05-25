import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const StackedBarChart = ({
  data,
  label = "Bar Graph",
  xlabel="xval",
  ylabe="yval",
  color,
  key1,
  key2,
  width="500"
}) => {
  return (
    <div className='barchart'>
         <h3 style={{ textAlign: "center", marginBottom: "25px" }}>{label}</h3>
        
         <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '40vh', aspectRatio: 1.618 }}
      responsive
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
      <Tooltip />
      <Legend />
      <Bar dataKey={key1} stackId="a" fill="#8884d8" background />
      <Bar dataKey={key2} stackId="a" fill="#3532bf" background />

    </BarChart>
    </div>
  )
}

export default StackedBarChart