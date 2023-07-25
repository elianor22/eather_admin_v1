/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TableContainer, Table as MUITable, TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material'
import TableMenu from './TableMenu'

const Table = ({ rows, columns, showHeader, align, buttonOptions, showButtonOption, buttonOptionTitle }) => {
  const [optionKey, setOptionKey] = useState(0)
  const [option, setOption] = useState('')
  const [openOptionMenu, setOPtionMenu] = useState(false)
  const keys = Object.keys(buttonOptions)
  const optionsMenu = keys.map((key) => ({
    title: key,
    color: buttonOptions[key].color ?? 'primary',
    icon: buttonOptions[key].icon,
    onClick: () => buttonOptions[key]?.onClick(option),
  }))

  return (
    <TableContainer>
      <MUITable>
        {showHeader && (
          <TableHead>
            <TableRow>
              {rows.map((row) => (
                <TableCell
                  key={row.key}
                  align={align}
                  sx={{
                    fontWeight: '700',
                  }}
                >
                  {row.title}
                </TableCell>
              ))}
              <TableCell
                align={align}
                sx={{
                  fontWeight: '700',
                }}
              >
                {buttonOptionTitle}
              </TableCell>
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {columns.map((col, idx) => (
            <TableRow key={col.id}>
              {rows.map((row, idx) => (
                <TableCell key={idx} align={align}>
                  {col[row.key]}
                </TableCell>
              ))}
              {showButtonOption && columns ? (
                <TableCell>
                  <Box position={'relative'} left={0} right={0}>
                    <TableMenu data={optionsMenu} onClick={() => setOption(col)} />
                  </Box>
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  )
}

Table.defaultProps = {
  align: 'left',
  showButtonOption: false,
  showHeader: true,
  buttonOptionTitle: 'Options',
}
Table.propTypes = {
  columns: PropTypes.array.isRequired,
  align: PropTypes.string,
  showHeader: PropTypes.bool,
  buttonOptions: PropTypes.shape({
    view: PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string,
      color: PropTypes.string,
      onClick: PropTypes.func,
    }),
  }),
  showButtonOption: PropTypes.bool,
  buttonOptionTitle: PropTypes.string,
}

export default Table
