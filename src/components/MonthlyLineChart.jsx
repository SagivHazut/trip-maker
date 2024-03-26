import React, { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ReferenceLine,
} from 'recharts'

export function MonthlyLineChart() {
  const [chartWidth, setChartWidth] = useState(900)

  const data = [
    { month: 'Jan', value: 0, data: 'session' },
    { month: 'Feb', value: 0.5, data: 'session' },
    { month: 'Mar', value: 3, data: 'session' },
    { month: 'Apr', value: 3, data: 'session' },
    { month: 'May', value: 3, data: 'session' },
    { month: 'Jun', value: 3, data: 'session' },
    { month: 'Jul', value: 3, data: 'session' },
    { month: 'Aug', value: 0, data: 'session' },
    { month: 'Sep', value: 0, data: 'session' },
    { month: 'Oct', value: 0, data: 'session' },
    { month: 'Nov', value: 3, data: 'session' },
    { month: 'Dec', value: 3, data: 'session' },
  ]

  useEffect(() => {
    const updateChartWidth = () => {
      const newWidth = window.innerWidth >= 1550 ? 1500 : 900
      setChartWidth(newWidth)
    }

    updateChartWidth()

    window.addEventListener('resize', updateChartWidth)

    return () => {
      window.removeEventListener('resize', updateChartWidth)
    }
  }, [])

  return (
    <LineChart width={chartWidth} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8882d8" />
      <Area type="monotone" dataKey="value" fill="red" fillOpacity={0.3} />
      <ReferenceLine y={0} stroke="red" />
    </LineChart>
  )
}
