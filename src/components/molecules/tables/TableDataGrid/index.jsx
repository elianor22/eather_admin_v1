/* eslint-disable no-unused-vars */
import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { typeTableDataGrid } from '../../../../@types/table'
import CustomeTablePagination from '../CustomeTablePagination'
import { LinearProgress } from '@mui/material'
import { GridPagination } from '@mui/x-data-grid'
import { ColorProps } from '../../../../utils/thema/colors'

function CustomPagination(props) {
  return <GridPagination ActionsComponent={CustomeTablePagination} {...props} />
}

const TableDataGrid = ({ columns, rows, pageSize, onChangePage, perPageOptions }) => {
  return (
    <DataGrid
      columns={columns}
      rows={rows}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: pageSize,
          },
        },
      }}
      pageSizeOptions={perPageOptions}
      onPaginationModelChange={onChangePage}
      slots={{
        pagination: CustomPagination,
        loadingOverlay: LinearProgress,
      }}
      sx={{
        backgroundColor: ({ palette }) => ColorProps['card'][palette.mode],
      }}
    />
  )
}

TableDataGrid.propTypes = {
  ...typeTableDataGrid,
}

export default TableDataGrid
