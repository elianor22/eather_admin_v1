import { Box } from '@mui/material'
import React from 'react'
import Typography from '../../../atoms/Typography/Typography'
import { ResponsiveLine } from '@nivo/line'
import PropTypes from 'prop-types'
import { nivoColorTYpes, nivoColorsSchemasPropTypes } from '../../../../constants/nivoColorsSchemas'

const ChartLine = ({ data, title, titleSize, colorSchema = 'category10' }) => {
  return (
    <Box sx={{ height: '300px' }}>
      <Typography fontSize={titleSize}>{title}</Typography>
      {data && (
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 20, bottom: 50, left: 30 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
          axisTop={null}
          axisRight={null}
          colors={{ scheme: nivoColorTYpes[`${colorSchema}`] }}
          enablePoints={true}
          enableGridX={true}
          enableGridY={true}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          theme={{
            tooltip:{
                container:{
                    color:'gray'
                }  
            }
          }}
        />
      )}
    </Box>
  )
}

ChartLine.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
  fontWeight: PropTypes.number,
  colorSchema: PropTypes.oneOf(nivoColorsSchemasPropTypes),
}

export default ChartLine
