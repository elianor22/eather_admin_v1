/* eslint-disable no-undef */
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { ColorProps } from '../../utils/thema/colors'

export const SidebarWrapper = styled(Box)(({ padding, borderLeft }) => {
  return {
    padding: padding,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '2px',
    borderLeft,
    '&:hover': {
      backgroundColor: `${ColorProps.sidebar.hover} `,
    },
  }
})

export const SidebarItem = styled(Typography)(({ color }) => ({
  fontFamily: 'Poppins',
  margin: 0,
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '21px',
  display: 'block',
  color: color,
  backgroundColor: 'inherit',
  '&:hover': {
    backgroundColor: 'unset',
  },
}))
