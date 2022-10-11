import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Pie, PieChart, Tooltip } from 'recharts';

export default function Statistics() {
    
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];
    const quizItem = useLoaderData();
  return (
    <div>
        <PieChart width={730} height={250}>
        <Pie data={quizItem.data} dataKey='total' nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        <Tooltip />
        </PieChart>
    </div>
  )
}
