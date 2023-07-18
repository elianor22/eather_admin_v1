/* eslint-disable no-unused-vars */
import { Box, Grid } from '@mui/material'
import React from 'react'
import { Search } from '@mui/icons-material'
import { Spacing } from '../../utils/thema/spacing'
import { useGetPath } from '../../hooks/useGetPath'
import { routes } from '../../routes/routes'
import BaseCard from '../../components/molecules/Cards/BaseCard'
import Icon from '../../components/atoms/icons'
import Typography from '../../components/atoms/Typography/Typography'
import { Link } from 'react-router-dom'
// import InputField from '../../components/molecules/forms/Inputs/InputField'

const ComponentPages = () => {
  const { currentPath } = useGetPath()

  return (
    <Box width={'100%'} mt={Spacing['xl']}>
      <Box display={'flex'} justifyContent={'center'}>
        {/* <InputField
          placeholder={`Search ${currentPath}`}
          startIcon={<Search />}
          sx={{
            width: '100%',
            maxWidth: 'sm',
            '& .MuiInputBase-root': {
              borderRadius: '30px',
            },
          }}
        /> */}
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          mt: 3,
        }}
      >
        {routes
          .filter((r) => r.path === currentPath)
          .map((base) =>
            base.child.map((route) => (
              <Grid key={route.path} item xs={6} sm={4} md={3} lg={2}>
                <Link
                  to={route.path}
                  style={{
                    textDecoration: 'unset',
                  }}
                >
                  <BaseCard
                    sxContent={{
                      padding: 1,
                    }}
                  >
                    <Box display={'flex'} width={'100%'} alignItems={'center'}>
                      <Icon
                        variant={route.name.toLowerCase() === 'icons' ? 'icon' : route.name.toLowerCase()}
                        size={'large'}
                        color={'#622AFE'}
                      />
                      <Box px={'12px'}>
                        <Typography
                          sx={{
                            fontWeight: 700,
                          }}
                        >
                          {route.name}
                        </Typography>
                      </Box>
                    </Box>
                  </BaseCard>
                </Link>
              </Grid>
            ))
          )}
      </Grid>
    </Box>
  )
}

export default ComponentPages
