import { Box, Grid } from '@mui/material'
import BaseCard from '../../molecules/Cards/BaseCard'
import ChartBar from '../../organisms/charts/Bar'
import React from 'react'
import CardDashboardItem from '../../molecules/Cards/CardDashboardItem'
import ChartLine from '../../organisms/charts/Line'
import ChartDoughnut from '../../organisms/charts/Doughnut'
import ChartPie from '../../organisms/charts/Pie'
import { nivoColorTYpes } from '../../../constants/nivoColorsSchemas'

const DashboardTemplate = ({ dataResult, dataBar, dataPie, dataLine }) => {
  return (
    <Box>
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
            <ChartBar titleSize="20px" title="Chart Bar" data={dataBar} />
          </BaseCard>
        </Grid>

        <Grid item lg={4} md={5} xs={12} sm={6}>
          <BaseCard>
            <ChartDoughnut titleSize="20px" title="Chart Doughnut" data={dataPie} />
          </BaseCard>
        </Grid>

        <Grid item lg={4} md={5} xs={12} sm={6}>
          <BaseCard>
            <ChartLine titleSize="20px" title="Chart Line" data={dataLine} />
          </BaseCard>
        </Grid>

        <Grid item lg={4} md={5} xs={12} sm={6}>
          <BaseCard>
            <ChartPie titleSize="20px" title="Chart Pie" data={dataPie} colorSchema={nivoColorTYpes['accent']} />
          </BaseCard>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DashboardTemplate
