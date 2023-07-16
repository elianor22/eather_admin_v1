import { Box } from '@mui/material'
import React from 'react'
import Typography from '../../../components/atoms/Typography/Typography'
import Button from '../../../components/atoms/Button/Button'
import { Spacing } from '../../../utils/thema/spacing'
import { buttonColors, defaultVariants } from '../../../constants/button'
// import BaseCard from '../../../components/molecules/Cards/BaseCard'
import { iconSize } from '../../../constants/icons'
import Icon from '../../../components/atoms/icons'
import BaseCard from '../../../components/molecules/Cards/BaseCard'

const color = ['teal', 'orange', 'pink']

const ButtonPages = () => {
  return (
    <Box>
      <BaseCard>
        <Box mt={Spacing['md']}>
          <Typography variant="h3">Default Button</Typography>
          <Box>
            <Typography>variants button</Typography>
            <Box display={'flex'} flexWrap={'wrap'}>
              {defaultVariants.map((btn) => (
                <Box key={btn} mt={Spacing['xs']} px={1}>
                  <Button variant={btn}>{btn}</Button>
                </Box>
              ))}
            </Box>
          </Box>
          <Box mt={2}>
            <Typography>Colors button</Typography>
            <Box display={'flex'} flexDirection={'column'} flexWrap={'wrap'}>
              {defaultVariants.map((variant) => (
                <Box key={variant} display={'flex'} my={1} flexWrap={'wrap'}>
                  {buttonColors.map((color) => (
                    <Box key={color} mt={Spacing['xs']} px={1}>
                      <Button variant={variant} color={color}>
                        {color}
                      </Button>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
          <Box mt={2}>
            <Typography>Icon button</Typography>
            <Button variant={'contained'} startIcon={<Icon variant={'favorite'} />}>
              Favorite
            </Button>
            <Button
              variant={'outlined'}
              endIcon={<Icon variant={'dropdown'} />}
              sx={{
                mx: '8px',
              }}
            >
              Dropdown
            </Button>
            <Box display={'flex'} mt="8px">
              {iconSize.map((size, idx) => (
                <Box key={size}>
                  <Button variant={'icon'}>
                    <Icon variant={'star'} size={size} color={color[idx]} />
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </BaseCard>
    </Box>
  )
}

export default ButtonPages
