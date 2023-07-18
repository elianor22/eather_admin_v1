import React from 'react'
import PropTypes from 'prop-types'
import { Autocomplete as MUIAutocomplate } from '@mui/material'

const Autocomplete = ({ options }) => {
  return <MUIAutocomplate options={options} />
}
Autocomplete.propTypes = {
  options: PropTypes.array.isRequired,
}

export default Autocomplete
