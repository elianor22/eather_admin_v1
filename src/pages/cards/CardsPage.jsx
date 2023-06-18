import { Box, Grid } from '@mui/material'
import React from 'react'

import SimpleCard from '../../components/molecules/Cards/SimpleCard'
import SimpleCardActionLink from '../../components/molecules/Cards/SimpleCardActionLink'
import Typography from '../../components/atoms/Typography/Typography'

const CardsPage = () => {
  return (
    <Box>
      <Typography variant="h1" mb="30px">
        Cards Example
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <Box>
            <SimpleCard>
              Simple Card just simple. <br />
              Aliquip veniam fugiat ullamco enim. Culpa non magna esse elit adipisicing nisi enim do. Do reprehenderit
              elit et laboris reprehenderit culpa non.
            </SimpleCard>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box>
            <SimpleCard title="Simple card with header">
              Aliquip veniam fugiat ullamco enim. Culpa non magna esse elit adipisicing nisi enim do. Do reprehenderit
              elit et laboris reprehenderit culpa non. Quis minim sint eiusmod excepteur laboris non deserunt duis
              mollit velit reprehenderit fugiat.
            </SimpleCard>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box>
            <SimpleCardActionLink title="Card with link" actionLabel={'Go To'} href={'#'}>
              Aliquip veniam fugiat ullamco enim. Culpa non magna esse elit adipisicing nisi enim do. Do reprehenderit
              elit et laboris reprehenderit culpa non. Quis minim sint eiusmod excepteur laboris non deserunt duis
              mollit velit reprehenderit fugiat.
            </SimpleCardActionLink>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardsPage
