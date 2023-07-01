import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { ColorProps } from '../../../utils/thema/colors'

export const LogoWrapper = styled(Box)(({ maxWidth }) => {
  return {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'ease-out .3s',
    maxWidth,
  }
})

export const NavbarContent = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  padding: '0px 10px 0px 0px',
}))

export const DotNotif = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20px',
  height: '20px',
  position: 'absolute',
  backgroundColor: ColorProps['color']['light'],
  color: 'white',
  borderRadius: '10px',
  top: 0,
  right: 0,
  zIndex: 1,
}))
