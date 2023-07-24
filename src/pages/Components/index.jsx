/* eslint-disable no-unused-vars */
import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import { Search } from '@mui/icons-material'
import { Spacing } from '../../utils/thema/spacing'
import { useGetPath } from '../../hooks/useGetPath'
import { routes } from '../../routes/routes'
import BaseCard from '../../components/molecules/Cards/BaseCard'
import Icon from '../../components/atoms/icons'
import Typography from '../../components/atoms/Typography/Typography'
import { Link } from 'react-router-dom'
import InputField from '../../components/molecules/forms/inputs/InputField'

const ComponentPages = () => {
  const { currentPath } = useGetPath()

  const [filtered] = useState(routes.find((r) => r.path === currentPath).child)
  const [querySearch, setQuerySearch] = useState('')

  const filtering = filtered.filter((r) => {
    if (querySearch) {
      return r.name.toLowerCase().includes(querySearch.toLowerCase())
    }
    return r
  })

  return (
    <Box width={'100%'} mt={Spacing['xl']}>
      <Box display={'flex'} justifyContent={'center'}>
        <InputField
          placeholder={`Search ${currentPath}`}
          startIcon={<Search />}
          value={querySearch}
          onChange={(e) => setQuerySearch(e)}
          sx={{
            width: '100%',
            maxWidth: 'sm',
            '& .MuiInputBase-root': {
              borderRadius: '30px',
            },
          }}
        />
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          mt: 3,
          transition: 'all 1s',
        }}
      >
        {filtering.map((route) => {
          return (
            <Grid key={route.path} item xs={6} sm={4} md={3} lg={2}>
              <Link
                to={route.path}
                style={{
                  textDecoration: 'unset',
                  height: '100%',
                }}
              >
                <BaseCard
                  sx={{
                    height: '100%',
                  }}
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
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    sx={{
                      mt: 1,
                      color: ({ palette }) => palette['typo.3'][palette.mode],
                      opacity: 0.7,
                    }}
                  >
                    {desc[route.name.toLowerCase()]}
                  </Typography>
                </BaseCard>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default ComponentPages

const desc = {
  icons: 'Awsome icons ❤️',
  button: 'Button with rich varaint and icon button',
  input: 'Easey all to input with all variants input 😎',
  autocomplete: 'Cool input like a magic 🪄',
}
