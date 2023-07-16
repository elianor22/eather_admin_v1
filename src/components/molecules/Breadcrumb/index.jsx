/* eslint-disable no-unused-vars */
import styled from '@emotion/styled'
import { Box, Breadcrumbs as MUIBreadcrumbs } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '../../atoms/Typography/Typography'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import { ColorProps } from '../../../utils/thema/colors'

const BreadcrumbItemLink = styled(Link)(({ theme }) => ({
  textDecoration: 'unset',
  color: theme.palette.primary[theme.palette.mode],
  '&:visited': {
    color: 'inherit',
  },
}))

const Breadrumb = ({ breadcrumbs, separator, itemStyle, sx }) => {
  const theme = useTheme()

  return (
    <MUIBreadcrumbs separator={separator} sx={{ ...sx }}>
      {breadcrumbs.map((path) => (
        <Box key={path}>
          {breadcrumbs[breadcrumbs.length - 1] === path ? (
            <Typography
              color={ColorProps[theme.palette.mode]}
              sx={{
                ...itemStyle,
              }}
            >
              {path}
            </Typography>
          ) : (
            <BreadcrumbItemLink to={path === breadcrumbs[0] ? '/' : path}>
              <Typography
                color={'inherit'}
                sx={{
                  ...itemStyle,
                }}
              >
                {path}
              </Typography>
            </BreadcrumbItemLink>
          )}
        </Box>
      ))}
    </MUIBreadcrumbs>
  )
}

Breadrumb.defaultProps = {
  separator: '/',
}
Breadrumb.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  itemStyle: PropTypes.object,
  sx: PropTypes.object,
}

export default Breadrumb
