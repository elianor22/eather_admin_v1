import { Skeleton, Grid } from '@mui/material'
import React from 'react'

const LoaderDashboardItem = () => {
  return (
    <Grid container spacing={2}>
      {[...Array(4)].map((_, idx) => (
        <Grid key={idx} item md={3} sm={6} xs={12} lg={3}>
          <Skeleton
            key={idx}
            sx={{
              width: '100%',
              height: '134px',
              transform: 'unset',
              marginTop: '10px',
            }}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default LoaderDashboardItem
