import { Box, Grid } from '@mui/material'
import Typography from '../../atoms/Typography/Typography'
import BaseCard from '../../molecules/Cards/BaseCard'
import ChartBar from '../../organims/charts/Bar'
import React, { useEffect, useState } from 'react'

// dummy
import DashboardDummy from '../../../dummy/dashboardDummy.json'
import CardDashboardItem from '../../molecules/Cards/CardDashboardItem'
import LoaderDashboardItem from './loader/LoaderDashboardItem'
import ChartPie from '../../organims/charts/Pie'

const DashboardTempplate = () => {
  const [dataDashboardIitem, setDataDashboardItem] = useState([])

  useEffect(() => {
    const saveData = setTimeout(() => setDataDashboardItem(DashboardDummy.data), 3000)
    if (dataDashboardIitem.length === 0) {
      saveData
    }
    return () => {
      saveData
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box>
      <Typography variant="h1" mb="30px">
        Dashboard
      </Typography>
      {dataDashboardIitem.length >= 1 ? (
        <Grid container spacing={2}>
          {dataDashboardIitem.map((item) => (
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
      ) : (
        <LoaderDashboardItem />
      )}
      <Grid container spacing={2} mt={'1rem'}>
        <Grid item lg={8} xs={12} sm={12} md={7}>
          <BaseCard>
            <ChartBar />
          </BaseCard>
        </Grid>
        <Grid item lg={4} md={5}>
          <BaseCard>
            <ChartPie />
          </BaseCard>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DashboardTempplate
