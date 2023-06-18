import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Spacing } from '../../../../utils/thema/spacing'
import { ColorProps } from '../../../../utils/thema/colors'

export const CardImageWrapper = styled(Box)(() => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: '47px',
  width: '100%',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}))

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '17.5px',
  lineHeight: '21px',
  color: `${ColorProps['typo.2'][theme.palette.mode]} `,
}))
export const CardValue = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: Spacing['ml'],
  lineHeight: '21px',
  color: `${ColorProps['typo.1'][theme.palette.mode]} !important`,
}))
export const CardPercetage = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: Spacing['sm'],
  lineHeight: '21px',
  color: `${ColorProps['green.1'][theme.palette.mode]} `,
}))
