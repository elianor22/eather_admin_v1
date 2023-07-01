import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const ImageWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'static',
  width: '100%',
  borderRadius:'4px',
  overflow: 'hidden',

  '& img': {
    width: '100%',
    // height: '100%',
    objectFit: 'cover',
    objectPosition:'center center'
  },
}))
