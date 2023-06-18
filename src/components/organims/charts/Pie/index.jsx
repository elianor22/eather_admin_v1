import { Box } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'
import React from 'react'
import Typography from '../../../atoms/Typography/Typography'

const data = [
  { id: 'A', label: 'Category A', value: 300 },
  { id: 'B', label: 'Category B', value: 500 },
  { id: 'C', label: 'Category C', value: 200 },
]

const ChartPie = () => {
  return (
    <Box height={'300px'}>
      <Typography>Pie</Typography>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'category10' }}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        enableRadialLabels={false}
        enableSliceLabels={true}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </Box>
  )
}

export default ChartPie
