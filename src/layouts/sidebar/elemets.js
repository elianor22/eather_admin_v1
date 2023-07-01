/* eslint-disable no-undef */
import styled from '@emotion/styled'
import { Box, ListItemText } from '@mui/material'

export const SidebarWrapper = styled(Box)(({ padding, borderLeft }) => {
  return {
    padding: padding,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '2px',
    borderLeft,
  }
})

export const SidebarItem = styled(ListItemText)(({ color }) => ({
  fontFamily: 'Poppins',
  margin: 0,
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '21px',
  display: 'block',
  color: color,
}))
