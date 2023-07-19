import React from 'react'
import PropTypes from 'prop-types'
import { Box, CardContent, Paper } from '@mui/material'
import Typography, { typoTypes } from '../../atoms/Typography/Typography'
import { Spacing } from '../../../utils/thema/spacing'
import { ColorProps } from '../../../utils/thema/colors'

const BaseCard = ({ title, elevation, titleVariant, children, sx, sxContent, ...props }) => {
  return (
    <Paper
      elevation={elevation}
      {...props}
      sx={{
        borderRadius: Spacing['sm'],
        backgroundColor: ({ palette }) => ColorProps['card'][palette.mode],
        overflow: 'hidden',
        ...sx,
      }}
    >
      <CardContent sx={{ ...sxContent }}>
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
    </Paper>
  )
}

BaseCard.defaultProps = {
  elevation: 0,
  titleVariant: 'h4',
}

BaseCard.propTypes = {
  title: PropTypes.string,
  titleVariant: PropTypes.oneOf(typoTypes),
  children: PropTypes.node,
  sx: PropTypes.object,
  sxContent: PropTypes.object,
}

export default BaseCard
