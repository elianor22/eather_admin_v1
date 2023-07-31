import React, { useRef, useState } from 'react'
import BaseCard from '../../components/molecules/Cards/BaseCard'
import Table from '../../components/molecules/tables/Table'
import { mockDataSimpleTable } from '../../dummy/mocksData'
import { simpleTableColumns, basicTableColumns, columnsDataGrid } from '../../constants/table'
import TablePagination from '../../components/molecules/tables/TablePagination'
import { Box } from '@mui/material'
import { mockDataTable } from '../../dummy/mockTable'
import TableDataGrid from '../../components/molecules/tables/TableDataGrid'
import Typography from '../../components/atoms/Typography/Typography'

const TablePage = () => {
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(10)

  const ref = useRef()

  return (
    <Box>
      <BaseCard>
        <Typography mb={3} variant="h4">
          Basic Table
        </Typography>
        <Table
          rows={mockDataSimpleTable}
          columns={simpleTableColumns}
          showButtonOption={true}
          buttonOptions={{
            view: {
              title: 'View',
              color: 'primary',
              icon: 'eye',
              onClick: (v) => console.log('from pages table', v),
            },
            edit: {
              title: 'Edit',
              color: 'secondary',
              onClick: (v) => console.log('from pages table', v),
            },
            delete: {
              title: 'Delete',
              color: 'error',
              onClick: (v) => console.log('from pages table', v),
            },
          }}
        />
      </BaseCard>
      <Box mt={3} ref={ref} pt={2}>
        <BaseCard>
          <Typography mb={3} variant="h4">
            Table With Pagination
          </Typography>
          <TablePagination
            rows={mockDataTable}
            columns={basicTableColumns}
            dataLength={mockDataTable.length}
            page={page}
            perPage={perPage}
            showButtonOption={false}
            onChangePage={(page) => {
              setPage(page)
              ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
            }}
            onChangePerPage={(e) => setPerPage(e)}
          />
        </BaseCard>
      </Box>
      <Box mt={3}>
        <BaseCard>
          <Typography mb={3} variant="h4">
            Table With MUI DataTable
          </Typography>
          <TableDataGrid
            columns={columnsDataGrid}
            rows={mockDataTable}
            pageSize={10}
            perPageOptions={[10, 25, 50, 100]}
            onPaginationModelChange={console.log}
            showToolbar={true}
          />
        </BaseCard>
      </Box>
    </Box>
  )
}

export default TablePage
