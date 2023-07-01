import styled from '@emotion/styled'
import { Box, Card } from '@mui/material'
import { Link } from 'react-router-dom'
import { ColorProps } from '../../../utils/thema/colors'

export const CardWrapper = styled(Card)(() => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
}))

export const CardHeadImageDescContent = styled(Box)(() => ({
  height: '100%',
  width: '100%',
  transition: 'all .4s',
  display: 'flex',
  alignItems: 'center',
  padding: '20px 40px',
  color: 'white',
  '&:hover': {
    transition: 'all .5s',
    background: 'linear-gradient(102deg, rgba(0,0,0,0.7), transparent)',
    backgroundColor: 'rgba(0,0,0,.2)',
  },
}))

export const CardHeadImageLink = styled(Link)(() => ({
  color: 'white',
  textDecorationColor: 'transparent',

  '&:hover': {
    textDecorationColor: '#FFFFFF',
  },
}))

export const LinkNew = styled(Link)(({ theme }) => ({
  color: ColorProps['typo.2'][theme.palette.mode],
  textDecorationColor: 'transparent',
  '&:hover': {
    textDecorationColor: 'black',
  },
}))
