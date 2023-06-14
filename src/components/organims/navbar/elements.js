import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const LogoWrapper = styled(Box)((props) => {
  return {
    width: '100%',
    maxWidth: '250px',
    backgroundColor: 'teal',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...props,
  }
})
