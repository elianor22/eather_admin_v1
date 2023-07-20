import React from 'react'
import { Link as RRDLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledLink = styled(RRDLink)(({ theme: { palette }, ...props }) => ({
  textDecoration: 'unset',
  color: palette.primary[palette.mode],
  ...props.style,
}))

const Link = ({ href, target, rel, onChange, visitedColor, hoverColor, hoverBg, sx, ...props }) => {
  return (
    <StyledLink
      to={href}
      target={target}
      onChange={(e) => onChange?.(e)}
      rel={rel}
      style={{
        '&:hover': {
          color: hoverColor,
          backgroundColor: hoverBg,
          opacity: 0.7,
        },
        '&:visited': {
          color: visitedColor,
        },
        ...sx,
      }}
      {...props}
    ></StyledLink>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  onChange: PropTypes.func,
}

export default Link
