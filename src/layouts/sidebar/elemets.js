/* eslint-disable no-undef */
import styled from '@emotion/styled'
import { Box, ListItemText } from '@mui/material'

export const SidebarWrapper = styled(Box)(() => {
  return {
    position: 'relative',
    top: 0,
    flexGrow: 1,
    bottom: 0,
    overflowY: 'auto',
    left: 0,
    right: 0,
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#999',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
  }
})

export const SidebarItem = styled(ListItemText)(({ color }) => ({
  fontFamily: 'Poppins',
  margin: 0,
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '21px',
  display: 'block',
  color: color,
  '& span': {
    fontSize: 'inherit',
  },
}))
