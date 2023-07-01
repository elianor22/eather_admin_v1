/* eslint-disable no-unused-vars */
import { Box, Grid } from '@mui/material'
import React from 'react'

import SimpleCard from '../../components/molecules/Cards/SimpleCard'
import SimpleCardActionLink from '../../components/molecules/Cards/SimpleCardActionLink'
import Typography from '../../components/atoms/Typography/Typography'
import CardHeadline from '../../components/organisms/CardHeadline'
import CardHeadlineImage from '../../components/organisms/CardHeadlineImage'
import CardItemNews from '../../components/organisms/CardItemNews'

import car from '../../assets/images/car.jpg'
import newsImage from '../../assets/images/news.jpg'
import FoodImage from '../../assets/images/food.jpg'
import music from '../../assets/images/music.jpg'

import { mockDataProfile, mockProduct } from '../../dummy/mocksData'
import CardProduct from '../../components/organisms/CardProduct'
import MediaControlMusic from '../../components/organisms/MediaControlMusic'
import CardItemUser from '../../components/molecules/Cards/CardItemUser'
import CardProfile from '../../components/organisms/CardProfile'

const CardsPage = () => {
  return (
    <Box>
      <Typography variant="h1" mb="30px">
        Cards Example
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <SimpleCard
            sx={{
              height: '100%',
            }}
          >
            Simple Card just simple. <br />
            Aliquip veniam fugiat ullamco enim. Culpa non magna esse elit adipisicing nisi enim do. Do reprehenderit
            elit et laboris reprehenderit culpa non.
          </SimpleCard>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <SimpleCard
            title="Simple card with header"
            sx={{
              height: '100%',
            }}
          >
            Aliquip veniam fugiat ullamco enim. Culpa non magna esse elit adipisicing nisi enim do. Do reprehenderit
            elit et laboris reprehenderit culpa non. Quis minim sint eiusmod excepteur laboris non deserunt duis mollit
            velit reprehenderit fugiat.
          </SimpleCard>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <SimpleCardActionLink title="Card with link" actionLabel={'Go To'} href={'#'}>
            Aliquip veniam fugiat ullamco enim. Culpa non magna esse elit adipisicing nisi enim do. Do reprehenderit
            elit et laboris reprehenderit culpa non. Quis minim sint eiusmod excepteur laboris non deserunt duis mollit
            velit reprehenderit fugiat.
          </SimpleCardActionLink>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={3}>
        <Grid item lg={5} md={6} sm={6} xs={12}>
          <CardHeadline
            title="Amazing Car"
            discription="Velit nulla culpa qui et aliquip sint irure. Duis in aliquip eiusmod occaecat. Ipsum velit adipisicing ex proident labore aliqua."
            image={car}
            href="#"
            alt="amazing card image"
          />
        </Grid>
        <Grid item lg={5} md={6} sm={6} xs={12}>
          <CardHeadlineImage
            title="The 10 most delicious foods in the world "
            headline="Velit nulla culpa qui et aliquip sint irure. Duis in aliquip eiusmod occaecat. Ipsum velit adipisicing ex proident labore aliqua."
            image={FoodImage}
            href="#"
            alt="amazing card image"
          />
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12}>
          <CardItemNews
            title="The 10 most delicious foods in the world Velit nulla culpa qui et aliquip sint irure."
            imageUrl={newsImage}
            href="#"
            alt="amazing card image"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={4}>
        <Grid item lg={2} md={3} sm={4} xs={6}>
          <Box>
            <CardProduct dataProduct={mockProduct} />
          </Box>
        </Grid>
        <Grid item lg={3} md={5} sm={6} xs={6}>
          <CardProfile dataUser={mockDataProfile} />
          <Box mt={2}>
            <CardItemUser
              name="Michaela"
              desc="UX DESIGNER"
              userImage="src"
              onClick={console.log}
              onClickRemove={console.log}
            />
          </Box>
        </Grid>
        <Grid item xl={4} lg={5} md={7} sm={6} xs={8}>
          <MediaControlMusic cover={music} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardsPage
