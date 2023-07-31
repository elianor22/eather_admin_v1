/* eslint-disable no-unused-vars */
import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { typeTableDataGrid } from '../../../../@types/table'
import CustomeTablePagination from '../CustomeTablePagination'
import { Box, LinearProgress } from '@mui/material'
import { GridPagination } from '@mui/x-data-grid'
import { ColorProps } from '../../../../utils/thema/colors'

function CustomPagination(props) {
  return <GridPagination ActionsComponent={CustomeTablePagination} {...props} />
}

const TableDataGrid = ({ columns, rows, pageSize, onChangePage, perPageOptions, showToolbar, sx }) => {
  function renderToolbar() {
    return (
      <Box display={'flex'} justifyContent={'flex-end'}>
        <GridToolbar />
      </Box>
    )
  }
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
        toolbar: showToolbar && renderToolbar,
      }}
      sx={{
        backgroundColor: ({ palette }) => ColorProps['card'][palette.mode],
        ...sx,
      }}
    />
  )
}

TableDataGrid.propTypes = {
  ...typeTableDataGrid,
}

export default TableDataGrid
