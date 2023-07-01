import styled from '@emotion/styled'
import { Box, Card } from '@mui/material'
import { Spacing } from '../../../utils/thema/spacing'
import Typography from '../../atoms/Typography/Typography'
import { ColorProps } from '../../../utils/thema/colors'

export const CardProfileWrapper = styled(Card)(() => ({
  borderRadius: Spacing['s'],
  overflow: 'hidden',
  position: 'relative',
  display: 'block',
}))

export const ProfileBanner = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  borderRadius: 0,

  '& img': {
    width: '100%',
    height: '100%',
  },
}))

export const ProfileContent = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  marginTop: 'calc(20% / 0.75)',
  padding: '16px',
  // top: '120px',
  zIndex: 1,
  position: 'relative',
  background: 'transparent',
}))

export const ProfileImage = styled(Box)(() => ({
  width: ' 80px',
  height: ' 80px',
  borderRadius: '100%',
  overflow: 'hidden',

  '& img': {
    width: '100%',
    height: '100%',
  },
}))

export const UserName = styled(Typography)(({ theme }) => {
  return {
    color: ColorProps['typo.3'][theme.palette.mode],
  }
})
