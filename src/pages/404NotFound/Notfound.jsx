import { Box, Button } from '@mui/material'
import React from 'react'
import Typography from '../../components/atoms/Typography/Typography'

const Notfound = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h2">404 Not Found</Typography>
        <Typography>Oops! sorry this page not found please click botton below for back to home</Typography>
        <Button href="/" variant="contained">
          Home
        </Button>
      </Box>
    </Box>
  )
}

export default Notfound
