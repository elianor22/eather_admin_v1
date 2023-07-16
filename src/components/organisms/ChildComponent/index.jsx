import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../../atoms/Typography/Typography'
import { Outlet } from 'react-router-dom'

const ChildComponent = ({ title }) => {
  return (
    <div>
      <Typography variant="h1">{title}</Typography>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

ChildComponent.propTypes = {
  title: PropTypes.string,
}

export default ChildComponent
