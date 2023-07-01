import { Box } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'
import React from 'react'
import Typography from '../../../atoms/Typography/Typography'
import PropTypes from 'prop-types'
import { nivoColorTYpes, nivoColorsSchemasPropTypes } from '../../../../constants/nivoColorsSchemas'

const ChartDoughnut = ({ data, title, titleSize, colorSchema = 'category10' }) => {
  return (
    <Box height={'300px'}>
      <Typography fontSize={titleSize}>{title}</Typography>
      {data && (
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: nivoColorTYpes[`${colorSchema}`] }}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          enableRadialLabels={false}
          enableSliceLabels={true}
          enableArcLinkLabels={false}
          theme={{
            tooltip:{
                container:{
                    color:'gray'
                }  
            }
          }}
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
      )}
    </Box>
  )
}

ChartDoughnut.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
  fontWeight: PropTypes.number,
  colorSchema: PropTypes.oneOf(nivoColorsSchemasPropTypes),
}

export default ChartDoughnut
