import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DashboardTemplate from '../../components/templates/DashboardTemplate'
import { mockBarData, mockDataSimpleTable, mockLineData, mockPie, mockResult } from '../../dummy/mocksData'
import DashboardLoader from '../../components/templates/DashboardTemplate/loader/DashboardLoader'
import Table from '../../components/molecules/tables/Table'
import { simpleTableColumns } from '../../constants/table'
import BaseCard from '../../components/molecules/Cards/BaseCard'

const Dashboard = () => {
  const [isFetched, setIsFetched] = useState(false)
  const [dataDashboardIitem, setDataDashboardItem] = useState([])
  const [mockData, setMockData] = useState({})

  useEffect(() => {
    const saveData = setTimeout(() => {
      setIsFetched(true)
      setDataDashboardItem(mockResult)
      setMockData({ ...mockData, mockBar: mockBarData, mockPie: mockPie, mockLine: mockLineData })
    }, 3000)

    return () => {
      saveData
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box>
      {isFetched ? (
        <Box width={'100%'}>
          <DashboardTemplate
            dataResult={dataDashboardIitem}
            dataBar={mockData.mockBar}
            dataPie={mockData.mockPie}
            dataLine={mockData.mockLine}
          />
          <BaseCard
            sx={{
              mt: 3,
            }}
          >
            <Table columns={simpleTableColumns} rows={mockDataSimpleTable} showButtonOption={false} />
          </BaseCard>
        </Box>
      ) : (
        <DashboardLoader />
      )}
    </Box>
  )
}

export default Dashboard
