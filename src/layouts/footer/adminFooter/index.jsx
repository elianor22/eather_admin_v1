import { styled, useTheme } from '@mui/material'
import React from 'react'
import { useSidebarWathcer } from '../../../hooks/useSidebarWatcher'
import Typography from '../../../components/atoms/Typography/Typography'
import { ColorProps } from '../../../utils/thema/colors'

const Footer = styled('footer')({
  position: 'relative',
  bottom: 0,
  left: 0,
})
const AdminFooter = () => {
  const { sidebarPadding } = useSidebarWathcer()
  const theme = useTheme()

  return (
    <Footer
      sx={{
        py: 2,
        pl: `${sidebarPadding + 20}px`,
      }}
    >
      <Typography variant="h4" color={ColorProps['typo.3'][theme.palette.mode]}>
        ©2023 Eather Admin. All Rights Reserved
      </Typography>
    </Footer>
  )
}

export default AdminFooter
