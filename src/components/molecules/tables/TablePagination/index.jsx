import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Table from '../Table'
import { Box } from '@mui/material'
import { TablePagination as MuiTablePaginate } from '@mui/material'
import CustomeTablePagination from '../CustomeTablePagination'

const TablePagination = ({
  rows,
  columns,
  dataLength,
  page,
  perPage,
  onChangePage,
  onChangePerPage,
  buttonOptions,
  showButtonOption,
}) => {
  const renderRows = useMemo(() => rows.slice(page * perPage, page * perPage + perPage), [rows, page, perPage])

  return (
    <Box>
      <Table rows={renderRows} columns={columns} showButtonOption={showButtonOption} buttonOptions={buttonOptions} />
      <MuiTablePaginate
        rowsPerPageOptions={[10, 25, 50]}
        component={'div'}
        count={dataLength}
        rowsPerPage={perPage}
        page={page}
        onPageChange={(_, val) => onChangePage?.(val)}
        onRowsPerPageChange={(e) => onChangePerPage?.(parseInt(e.target.value, 10))}
        ActionsComponent={CustomeTablePagination}
      />
    </Box>
  )
}

TablePagination.defaultProps = {
  showButtonOption: false,
  showHeader: true,
  buttonOptionTitle: 'Options',
  page: 0,
  perPage: 10,
}
TablePagination.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  dataLength: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onChangePerPage: PropTypes.func.isRequired,
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
}
export default TablePagination
