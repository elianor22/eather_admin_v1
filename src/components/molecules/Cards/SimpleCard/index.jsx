import React from 'react'
import PropTypes from 'prop-types'
import BaseCard from '../BaseCard'
import { typoTypes } from '../../../atoms/Typography/Typography'

const SimpleCard = ({ title, variant, children, sx, sxContent }) => {
  return (
    <BaseCard title={title} variant={variant} sx={{ ...sx }} sxContent={{ ...sxContent }}>
      {children}
    </BaseCard>
  )
}

SimpleCard.propTypes = {
  title: PropTypes.string,
  titleVariant: PropTypes.oneOf(typoTypes),
  children: PropTypes.node,
  sx: PropTypes.object,
  sxContent: PropTypes.object,
}

export default SimpleCard
