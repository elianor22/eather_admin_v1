import styled from '@emotion/styled'
import { Box, Card } from '@mui/material'
import { Spacing } from '../../../utils/thema/spacing'
import { Link } from 'react-router-dom'
import { ColorProps } from '../../../utils/thema/colors'
import Typography from '../../atoms/Typography/Typography'
import React from 'react'

export const ProductWrapper = styled(Card)(() => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  borderRadius: Spacing['s'],
}))

export const ProductContent = styled(Box)(() => ({
  display: 'inline-flex',
  alignItems: 'stretch',
  boxSizing: 'inherit',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
}))
export const ProductImageContent = styled(Box)(() => ({
  display: 'block',
  position: 'relative',
  margin: 0,
  padding: 0,
  paddingBottom: '100%',
  height: 0,
  overflow: 'hidden',
}))

export const ProductDetailContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
}))

export const ProductLink = styled(Link)(({ theme }) => ({
  textDecoration: 'unset',
  color: ColorProps['typo.2'][theme.palette.mode],
}))

export const ProductName = styled((props) => <Typography variant="body1" {...props} />)(() => ({
  display: '-webkit-box',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  fontWeight: 700,
  fontSize: '13px',
}))

export const ProductPrice = styled(Typography)(() => ({
  fontSize: '12px',
  fontWeight: 700,
}))

export const DiscountWrapper = styled(Box)(() => ({
  display: 'flex',
  marginTop: '6px',
}))

export const DiscountLabel = styled(Box)(() => ({
  padding: '2px 4px',
  borderRadius: '4px',
  backgroundColor: '#eac7ff',
  color: '#9e00ff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '10px',
  fontWeight: 700,
}))

export const DiscountPrice = styled(Typography)(({ theme }) => ({
  fontSize: '11px',
  fontWeight: 400,
  color: ColorProps['typo.2'][theme.palette.mode],
  marginLeft: '4px',
  textDecoration: 'line-through',
}))

export const LabelWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}))

export const LabelCashback = styled(Box)(({ theme }) => ({
  display: 'block',
  borderRadius: Spacing['xs'],
  backgroundColor: ColorProps['green.1'][theme.palette.mode],
  width: 'fit-content',
  padding: '1px 8px',
}))
