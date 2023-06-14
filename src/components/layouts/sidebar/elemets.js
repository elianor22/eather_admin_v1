/* eslint-disable no-undef */
import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const SidebarWrapper = styled(Box)(({ padding }) => {
  return {
    padding: padding,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '16px',
  }
})

export const SidebarItem = styled('span')(() => ({
  fontFamily: 'Poppins',
  margin: 0,
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '21px',
  display: 'block',
}))
