import React from 'react'
import PropTypes from 'prop-types'
import BaseCard from '../BaseCard'
import { Box, CardActions, Link } from '@mui/material'
import { typoTypes } from '../../../atoms/Typography/Typography'

const CardWithAction = ({
  title,
  variant,
  children,
  actionLabel,
  // eslint-disable-next-line no-unused-vars
  href,
  sx,
  sxContent,
}) => {
  return (
    <BaseCard title={title} variant={variant} sx={{ ...sx }} sxContent={{ ...sxContent }}>
      <Box width={'100%'}>{children}</Box>
      <CardActions sx={{ padding: 0, marginTop: '10px' }}>
        <Link href={href}>{actionLabel}</Link>
      </CardActions>
    </BaseCard>
  )
}

CardWithAction.propTypes = {
  title: PropTypes.string,
  titleVariant: PropTypes.oneOf(typoTypes),
  children: PropTypes.node,
  sx: PropTypes.object,
  sxContent: PropTypes.object,
}

export default CardWithAction
