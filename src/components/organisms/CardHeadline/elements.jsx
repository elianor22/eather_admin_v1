import styled from '@emotion/styled'
import { Box } from '@mui/material'
import Typography from '../../atoms/Typography/Typography'
import React from 'react'

export const CardHeadlineImageWrapper = styled(Box)(() => ({
  width: '100%',
  height: '250px',
  overflow: 'hidden',
  '& img': {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    transition: 'all .5s',

    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
}))

export const CardHeadlineDescription = styled((props) => <Typography variant="body1" {...props} />)(() => ({
  display: '-webkit-box',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
}))
