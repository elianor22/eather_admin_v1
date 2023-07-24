import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardContent, Link } from '@mui/material'
import { ImageWrapper } from './elemets'
import Typography from '../../atoms/Typography/Typography'
import { LinkNew } from '../CardHeadlineImage/elements'

const CardItemNews = ({ title, imageUrl, href }) => {
  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        backgroundImage: 'unset',
        boxShadow: 'none',
      }}
    >
      <CardContent
        sx={{
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '0px',
        }}
      >
        <Box display="flex" height="100%">
          <Box
            display="inline-flex"
            alignItems="stretch"
            boxSizing="inherit"
            flexDirection="column"
            height="100%"
            width="100%"
          >
            <Box position="relative" height="100%">
              <ImageWrapper>
                <Link href={href}>
                  <Box display="block" position="relative" margin={0} height={0} paddingBottom="100%" overflow="hidden">
                    <img src={imageUrl} loading="lazy" />
                  </Box>
                </Link>
              </ImageWrapper>
              <Box width="100%" paddingTop={'10px'}>
                <LinkNew>
                  <Typography
                    variant="body1"
                    fontSize={'16px'}
                    sx={{
                      display: '-webkit-box',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {title}
                  </Typography>
                </LinkNew>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

CardItemNews.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  href: PropTypes.string.isRequired,
}

export default CardItemNews
