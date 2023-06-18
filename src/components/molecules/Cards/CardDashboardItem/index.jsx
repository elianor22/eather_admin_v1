import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent } from '@mui/material'
import { CardImageWrapper, CardPercetage, CardTitle, CardValue } from './elements'
import { Spacing } from '../../../../utils/thema/spacing'
import { ColorProps } from '../../../../utils/thema/colors'

const CardDashboardItem = ({ title, imageUrl, value, percentage, indicator }) => {
  const renderIndicator = (indicator) => {
    if (indicator !== null) {
      return <span>{indicator === 'plus' ? '+' : '-'}</span>
    }
    return null
  }
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
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <CardTitle>{title}</CardTitle>
        <CardValue>{value}</CardValue>
        <CardPercetage
          sx={{
            color: indicator === 'plus' ? ColorProps['green.1'].light : ColorProps['red.1'].light + '!important',
          }}
        >
          {renderIndicator(indicator)}
          {typeof percentage === 'number' ? `${percentage} %` : percentage}
        </CardPercetage>
      </CardContent>
      <CardImageWrapper>
        <img src={imageUrl} alt="image" />
      </CardImageWrapper>
    </Card>
  )
}

CardDashboardItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  indicator: PropTypes.oneOf(['plus', 'minus']),
}

export default CardDashboardItem
