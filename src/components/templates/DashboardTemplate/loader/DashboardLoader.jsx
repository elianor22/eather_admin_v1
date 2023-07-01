import { Grid, Skeleton } from '@mui/material'
import React from 'react'

const DashboardLoader = () => {
  return (
    <Grid container spacing={2}>
      {[...Array(4)].map((_, idx) => (
        <Grid key={idx} item md={3} sm={6} xs={12} lg={3} >
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
      <Grid item lg={8} xs={12} sm={12} md={7}>
        <Skeleton
          width={'100%'}
          height={'300px'}
          sx={{
            transform: 'unset',
          }}
        />
      </Grid>
      <Grid item lg={4} md={5} xs={12} sm={6}>
        <Skeleton
          width={'100%'}
          height={'300px'}
          sx={{
            transform: 'unset',
          }}
        />
      </Grid>
      <Grid item lg={4} md={5} xs={12} sm={6}>
        <Skeleton
          width={'100%'}
          height={'300px'}
          sx={{
            transform: 'unset',
          }}
        />
      </Grid>
      <Grid item lg={4} md={5} xs={12} sm={6}>
        <Skeleton
          width={'100%'}
          height={'300px'}
          sx={{
            transform: 'unset',
          }}
        />
      </Grid>
    </Grid>
  )
}

export default DashboardLoader
