import { Box } from '@mui/material'
import React from 'react'
import Typography from '../../../components/atoms/Typography/Typography'
import BaseInput from '../../../components/atoms/BaseInput'

export const InputPages = () => {
  return (
    <Box>
      <Typography variant="h1">Inputs</Typography>
      <BaseInput
        name={'input'}
        placeholder={'text input'}
        autoFocus={true}
        startAdornmentText={'Kg'}
        endAdornmentText="qty"
      />
    </Box>
  )
}
