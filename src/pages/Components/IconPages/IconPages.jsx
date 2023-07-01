import { Box, Grid } from '@mui/material'
import React from 'react'
import Typography from '../../../components/atoms/Typography/Typography'
import { iconSize, iconsVariants } from '../../../constants/icons'
import Icon from '../../../components/atoms/icons'
import BaseCard from '../../../components/molecules/Cards/BaseCard'

const IconPages = () => {
  return (
    <Box>
      <Typography variant="h1">Icons</Typography>
      <Box mt={1}>
        <Typography>Icon Size</Typography>
        <Box display={'flex'}>
          {iconSize.map((size) => (
            <Box key={size} mx={1} maxWidth={'56px'}>
              <Icon variant={'star'} size={size} />
              <Typography>{size}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box mt={3}>
        <Typography>Icon Variants</Typography>
        <Grid container spacing={2}>
          {iconsVariants.map((variant) => (
            <Grid key={variant} item lg={2} md={3} sm={3} xs={6}>
              <BaseCard
                sx={{
                  margin: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Icon variant={variant} />
                <Typography sx={{ mt: 1 }}>{variant}</Typography>
              </BaseCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default IconPages
