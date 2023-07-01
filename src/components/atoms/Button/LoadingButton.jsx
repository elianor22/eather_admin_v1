/*
 * Customize Loading Button from Base MUI Button
 */

import React from 'react'
import PropTypes from 'prop-types'
import { buttonLoadingPosition } from '../../../constants/button'
import { Button, CircularProgress } from '@mui/material'

const LoadingButton = ({
  variant,
  isLoading,
  loadingText,
  loadingPosition = 'start',
  loadingIndicator,
  children,
  onClick,
  sx,
}) => {
  function renderChildred() {
    // if (isLoading) {
    //   if (loadingText) {
    //     return <Box>{loadingText}</Box>
    //   } else {
    //     switch (loadingPosition) {
    //       case 'start':
    //         return (
    //           <Box display="flex">
    //             {loadingIndicator ? loadingIndicator : <CircularProgress />}
    //             {children}
    //           </Box>
    //         )

    //       case 'end':
    //         return (
    //           <Box display="flex">
    //             {children}
    //             {loadingIndicator ? loadingIndicator : <CircularProgress />}
    //           </Box>
    //         )
    //       default:
    //         return (
    //           <Box display="flex">
    //             {loadingIndicator ? loadingIndicator : <CircularProgress />}
    //             {children}
    //           </Box>
    //         )
    //     }
    //   }
    // }

    if (isLoading) {
      if (loadingText) {
        return <div>{loadingText}</div>
      } else {
        return (
          <>
            {loadingPosition === 'end' && children}
            {loadingIndicator || <CircularProgress />}
            {loadingPosition !== 'end' && children}
          </>
        )
      }
    } else {
      return children
    }
  }

  return (
    <Button variant={variant} onClick={onClick} sx={{ ...sx }}>
      {renderChildred()}
    </Button>
  )
}

LoadingButton.propTypes = {
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
  loadingPosition: PropTypes.oneOf(buttonLoadingPosition),
  loadingIndicator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

export default LoadingButton
