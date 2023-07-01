import React from 'react'
import PropTypes from 'prop-types'
import {
  DiscountLabel,
  DiscountPrice,
  DiscountWrapper,
  LabelCashback,
  LabelWrapper,
  ProductContent,
  ProductDetailContent,
  ProductImageContent,
  ProductLink,
  ProductName,
  ProductPrice,
  ProductWrapper,
} from './elements'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { productLabel } from '../../../constants/productLabels'
import Typography from '../../atoms/Typography/Typography'
import Icon from '../../atoms/icons'

const CardProduct = ({ dataProduct }) => {
  const { name, slug, imgUrl, priceString, discountPrecentage, priceDiscountString } = dataProduct

  const renderLabel = (item, ratingValue, isRating) => {
    switch (item.position) {
      case productLabel.promo:
        return (
          <LabelCashback>
            <Typography fontWeight={700} fontSize={'10px'} color={'white'}>
              {item.name}
            </Typography>
          </LabelCashback>
        )

      default:
        return (
          <React.Fragment>
            {isRating && (
              <Box display={'flex'}>
                <Box display={'flex'} alignItems={'center'}>
                  <Box display={'flex'} width={'16px'}>
                    <Icon variant={'star'} color={'gold'} />
                  </Box>
                  <Typography
                    fontSize={'10px'}
                    fontWeight={700}
                    sx={{
                      marginLeft: '5px',
                    }}
                  >
                    {ratingValue}
                  </Typography>
                </Box>
                <Box borderRight={'1px solid rgba(0,0,0,.2)'} marginX={'5px'} />
                <Typography
                  fontSize={'10px'}
                  sx={{
                    display: '-webkit-box',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            )}
          </React.Fragment>
        )
    }
  }

  return (
    <ProductWrapper>
      <Box display="flex" height={'100$'}>
        <ProductContent>
          <Box display="flex" flexDirection="column" position="static">
            <ProductImageContent>
              <Link to={`/detail/${slug}`}>
                <Box
                  width={'100%'}
                  sx={{
                    '& img': {
                      width: '100%',
                      objectFit: 'cover',
                    },
                  }}
                >
                  <img src={imgUrl} alt={name} />
                </Box>
              </Link>
            </ProductImageContent>
          </Box>
          <ProductLink to={`/detail${slug}`}>
            <ProductDetailContent>
              <ProductName>{name}</ProductName>
              <Box display={'flex'} flexDirection={'column'} mt={1}>
                <ProductPrice>{priceString}</ProductPrice>
                <DiscountWrapper>
                  <DiscountLabel>{discountPrecentage}%</DiscountLabel>
                  <DiscountPrice>{priceDiscountString}</DiscountPrice>
                </DiscountWrapper>
                <Box>
                  <LabelWrapper>
                    {dataProduct.label?.map((item, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          marginTop: '8px',
                        }}
                      >
                        {renderLabel(item, dataProduct.rating, dataProduct.isRating)}
                      </Box>
                    ))}
                  </LabelWrapper>
                </Box>
              </Box>
            </ProductDetailContent>
          </ProductLink>
        </ProductContent>
      </Box>
    </ProductWrapper>
  )
}

CardProduct.propTypes = {
  dataProduct: PropTypes.object.isRequired,
}

export default CardProduct
