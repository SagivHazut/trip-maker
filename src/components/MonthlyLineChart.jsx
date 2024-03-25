import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

export function MonthlyLineChart() {
  const [chartWidth, setChartWidth] = useState(900)

  // Define months as labels for x-axis
  const months = [
    { month: 'January' },
    { month: 'February' },
    { month: 'March' },
    { month: 'April' },
    { month: 'May' },
    { month: 'June' },
    { month: 'July' },
    { month: 'August' },
    { month: 'September' },
    { month: 'October' },
    { month: 'November' },
    { month: 'December' },
  ]

  // Example data for each month
  const data = [
    { month: 'Jan', value: 10 },
    { month: 'Feb', value: 20 },
    { month: 'Mar', value: 30 },
    { month: 'Apr', value: 25 },
    { month: 'May', value: 35 },
    { month: 'Jun', value: 40 },
    { month: 'Jul', value: 45 },
    { month: 'Aug', value: 50 },
    { month: 'Sep', value: 45 },
    { month: 'Oct', value: 55 },
    { month: 'Nov', value: 60 },
    { month: 'Dec', value: 55 },
  ]

  // Update chart width based on window size
  useEffect(() => {
    const updateChartWidth = () => {
      const newWidth = window.innerWidth >= 1750 ? 1750 : 900
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
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  )
}
