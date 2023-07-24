import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const SimpleTable = ({ rows, columns, sx }) => {
  function renderTableHeader(column, idx) {
    if (typeof column === 'string') {
      return <TableCell key={idx}>{column}</TableCell>
    }
    return <TableHead key={idx}>{column.title}</TableHead>
  }
  return (
    <TableContainer>
      <Table sx={{ ...sx }}>
        <TableHead>
          <TableRow>{columns.map((column, idx) => renderTableHeader(column, idx))}</TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {rows.map((row, idx) => {
              if (typeof row === 'string') {
                return <TableCell key={idx}>{row}</TableCell>
              }
              return <TableCell key={idx}>{row.field}</TableCell>
            })}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

SimpleTable.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
}

export default memo(SimpleTable)
