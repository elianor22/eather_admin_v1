import React from 'react'
import PropTypes from 'prop-types'
import { CardProfileWrapper, ProfileBanner, ProfileContent, ProfileImage, UserName } from './elements'
import LazyImage from '../../atoms/LazyImage'
import './style.scss'
import { Box, useTheme } from '@mui/material'
import Typography from '../../atoms/Typography/Typography'
import Button from '../../atoms/Button/Button'
import { ColorProps } from '../../../utils/thema/colors'

const CardProfile = ({ dataUser }) => {
  const { fullname, username, profileImage, bannerImage, about } = dataUser
  const theme = useTheme()
  return (
    <CardProfileWrapper>
      <ProfileBanner>
        <LazyImage src={bannerImage} placeholder={fullname} alt={fullname} />
      </ProfileBanner>

      <ProfileContent>
        <ProfileImage>
          <LazyImage src={profileImage} placeholder={fullname} alt={fullname} />
        </ProfileImage>
        <Box mt={'20px'} display={'flex'} alignItems={'center'} flexDirection={'column'}>
          <Typography>{fullname}</Typography>
          <UserName fontSize={'11px'}>{username}</UserName>
          <Button
            variant="contained"
            sx={{
              marginTop: '1.3rem',
              marginBottom: '1rem',
            }}
          >
            Follow
          </Button>

          <Typography variant="body2" fontWeight={400} color={ColorProps['typo.3'][theme.palette.mode]}>
            {about}
          </Typography>
        </Box>
      </ProfileContent>
    </CardProfileWrapper>
  )
}

function handlePropTypes(props, propName, propComponent) {
  const propValue = props[propName]
  if (propValue === null) return
  if (typeof propValue === 'string') return
  return new Error(`${propComponent} only accepts string or null`)
}

CardProfile.propTypes = {
  dataUser: PropTypes.shape({
    fullname: PropTypes.oneOfType([PropTypes.string.isRequired]),
    userName: PropTypes.oneOfType([PropTypes.string.isRequired]),
    profileImage: (props, propName, propComponent) => handlePropTypes(props, propName, propComponent),
    bannerImage: (props, propName, propComponent) => handlePropTypes(props, propName, propComponent),
    about: (props, propName, propComponent) => handlePropTypes(props, propName, propComponent),
  }),
}

export default CardProfile
