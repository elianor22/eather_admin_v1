import React from 'react'
import PropTypes from 'prop-types'
import { CardHeadImageDescContent, CardHeadImageLink, CardWrapper } from './elements'
import Typography from '../../atoms/Typography/Typography'
import { Box, Divider } from '@mui/material'

// eslint-disable-next-line no-unused-vars
const CardHeadlineImage = ({ title, image, headline }) => {
  return (
    <CardWrapper
      sx={{
        backgroundImage: `url(${image})`,
      }}
    >
      <CardHeadImageDescContent>
        <Box width={'100%'} maxWidth={'70%'}>
          <CardHeadImageLink>
            <Typography fontWeight={700} variant="h1" lineHeight={1.2}>
              {title}
            </Typography>
          </CardHeadImageLink>
          <Divider
            sx={{
              my: '6px',
              height: '2px',
              backgroundColor: 'white',
            }}
          />
          <Typography fontWeight={700} variant="h4">
            {headline}
          </Typography>
        </Box>
      </CardHeadImageDescContent>
    </CardWrapper>
  )
}

CardHeadlineImage.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  headline: PropTypes.string,
}

export default CardHeadlineImage
