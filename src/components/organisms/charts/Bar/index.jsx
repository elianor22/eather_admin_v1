import { Box } from '@mui/material'
import { ResponsiveBar } from '@nivo/bar'
import React from 'react'
import Typography from '../../../atoms/Typography/Typography'
import PropTypes from 'prop-types'

const ChartBar = ({ data, title, titleSize }) => {
  return (
    <Box
      sx={{
        height: '300px',
        // '&:hover  ': {
        //   '& div': {
        //     color: 'black' /* Warna yang diinginkan saat hover pada mode gelap */,
        //   },
        // },
      }}
    >
      <Typography fontSize={titleSize}>{title}</Typography>
      {data && (
        <ResponsiveBar
          data={data}
          keys={['degress']}
          indexBy="day"
          margin={{ top: 50, right: 20, bottom: 50, left: 60 }}
          padding={0.4}
          valueScale={{ type: 'linear' }}
          labelTextColor="inherit:darker(2.4)"
          colors={({ data }) => data.color}
          animate={true}
          enableLabel={false}
          colorMode="nivo"
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'degrees',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          theme={{
            tooltip: {
              color: 'gray',
            },
            axis: {
              tickColor: '#eee',
              ticks: {
                line: {
                  stroke: '#555555',
                },
                text: {
                  fill: 'gray',
                },
              },
              legend: {
                text: {
                  fill: 'gray',
                },
              },
            },
          }}
        />
      )}
    </Box>
  )
}

ChartBar.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
  fontWeight: PropTypes.number,
}

export default ChartBar
