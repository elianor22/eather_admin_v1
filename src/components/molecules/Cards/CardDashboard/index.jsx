import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardContent } from '@mui/material'
import { Spacing } from '../../../../utils/thema/spacing'
import Typography from '../../../atoms/Typography/Typography'

const CardDashboard = ({ title, children }) => {
  return (
    <Card
      sx={{
        position: 'relative',
        height: '134px',
        borderRadius: Spacing['s'],
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography>{title}</Typography>
        <Box width={'100%'}>{children}</Box>
      </CardContent>
    </Card>
  )
}

CardDashboard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default CardDashboard
