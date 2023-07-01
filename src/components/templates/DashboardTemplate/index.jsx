import { Box, Grid } from '@mui/material'
import Typography from '../../atoms/Typography/Typography'
import BaseCard from '../../molecules/Cards/BaseCard'
import ChartBar from '../../organims/charts/Bar'
import React from 'react'
import CardDashboardItem from '../../molecules/Cards/CardDashboardItem'
import ChartLine from '../../organims/charts/Line'
import ChartDoughnut from '../../organims/charts/Doughnut'
import ChartPie from '../../organims/charts/Pie'
import { nivoColorTYpes } from '../../../constants/nivoColorsSchemas'

// eslint-disable-next-line no-unused-vars
const DashboardTempplate = ({ dataResult, dataBar, dataPie, dataLine }) => {
  return (
    <Box>
      <Typography variant="h1" mb="30px">
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        {dataResult.map((item) => (
          <Grid key={item.id} item md={3} sm={6} xs={12} lg={3}>
            <CardDashboardItem
              title={item.title}
              value={item.value}
              percentage={item.percentage}
              imageUrl={item.image}
              indicator={item.indicator}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} mt={'0px'}>
        <Grid item lg={8} xs={12} sm={12} md={7}>
          <BaseCard>
            <ChartBar title="Chart Bar" data={dataBar} />
          </BaseCard>
        </Grid>

        <Grid item lg={4} md={5} xs={12} sm={6}>
          <BaseCard>
            <ChartDoughnut title="Chart Doughnut" data={dataPie} />
          </BaseCard>
        </Grid>

        <Grid item lg={4} md={5} xs={12} sm={6}>
          <BaseCard>
            <ChartLine title="Chart Line" data={dataLine} />
          </BaseCard>
        </Grid>

        <Grid item lg={4} md={5} xs={12} sm={6}>
          <BaseCard>
            <ChartPie title="Chart Pie" data={dataPie} colorSchema={nivoColorTYpes['accent']} />
          </BaseCard>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DashboardTempplate
