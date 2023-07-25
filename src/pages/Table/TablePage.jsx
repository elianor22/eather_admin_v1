import React from 'react'
import BaseCard from '../../components/molecules/Cards/BaseCard'
import Table from '../../components/molecules/tables/Table'
import { mockDataSimpleTable } from '../../dummy/mocksData'
import { simpleTableRow } from '../../constants/table'

const TablePage = () => {
  return (
    <BaseCard>
      <Table
        rows={simpleTableRow}
        columns={mockDataSimpleTable}
        showButtonOption={true}
        buttonOptions={{
          view: {
            title: 'wow',
            color: 'primary',
            icon: 'eye',
            onClick: (v) => console.log('from pages table', v),
          },
        }}
      />
    </BaseCard>
  )
}

export default TablePage
