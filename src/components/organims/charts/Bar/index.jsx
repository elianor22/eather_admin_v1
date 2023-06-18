import { Box } from '@mui/material'
import { ResponsiveBar } from '@nivo/bar'
import React from 'react'
import Typography from '../../../atoms/Typography/Typography'

const data = [
  {
    day: 'Monday',
    degress: 59,
  },
  {
    day: 'Tuesday',
    degress: 61,
  },
  {
    day: 'Wednesday',
    degress: 55,
  },
  {
    day: 'Thursday',
    degress: 78,
  },
  {
    day: 'Friday',
    degress: 71,
  },
  {
    day: 'Saturday',
    degress: 56,
  },
  {
    day: 'Sunday',
    degress: 67,
  },
]

const ChartBar = () => {
  return (
    <Box
      sx={{
        height: '300px',
      }}
    >
      <Typography>Temperature</Typography>
      <ResponsiveBar
        data={data}
        keys={['degress']}
        indexBy="day"
        margin={{ top: 50, right: 20, bottom: 50, left: 60 }}
        padding={0.4}
        valueScale={{ type: 'linear' }}
        colors="#3182CE"
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'degrees',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
      />
    </Box>
  )
}

export default ChartBar
