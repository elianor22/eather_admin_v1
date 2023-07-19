import { Box, Button } from '@mui/material'
import React from 'react'
import { CardHeadlineDescription, CardHeadlineImageWrapper } from './elements'
import Typography from '../../atoms/Typography/Typography'
import PropTypes from 'prop-types'
import BaseCard from '../../molecules/Cards/BaseCard'

const CardHeadline = ({ title, discription, href, image, alt }) => {
  return (
    <BaseCard
      sx={{
        boxShadow: 'unset',
      }}
      sxContent={{
        padding: '0px !important',
      }}
    >
      <CardHeadlineImageWrapper>
        <img src={image} alt={alt} loading="lazy" />
      </CardHeadlineImageWrapper>

      <Box p={2}>
        <Typography variant="h4" mb={'5px'}>
          {title}
        </Typography>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'start'}>
          <CardHeadlineDescription>{discription}</CardHeadlineDescription>
          <Button
            variant="contained"
            href={href}
            sx={{
              mt: 1,
            }}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </BaseCard>
  )
}

CardHeadline.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  discription: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
}

export default CardHeadline
