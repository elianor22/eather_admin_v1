import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardContent } from '@mui/material'
import Typography, { typoTypes } from '../../atoms/Typography/Typography'

const BaseCard = ({ title, titleVariant = 'h4', children, sx, sxContent, ...props }) => {
  return (
    <Card
      {...props}
      sx={{
        ...sx,
      }}
    >
      <CardContent sx={{ sxContent }}>
        {title ? (
          <Typography
            variant={titleVariant}
            sx={{
              marginBottom: '10px',
            }}
          >
            {title}
          </Typography>
        ) : null}
        <Box width="100%">{children}</Box>
      </CardContent>
    </Card>
  )
}

BaseCard.propTypes = {
  title: PropTypes.string,
  titleVariant: PropTypes.oneOf(typoTypes, 'h3'),
  children: PropTypes.node,
  sx: PropTypes.object,
  sxContent: PropTypes.object,
}

export default BaseCard
