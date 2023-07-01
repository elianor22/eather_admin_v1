import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DashboardTempplate from '../../components/templates/DashboardTemplate'
import { mockBarData, mockLineData, mockPie, mockResult } from '../../dummy/mocksData'
import DashboardLoader from '../../components/templates/DashboardTemplate/loader/DashboardLoader'

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

  console.log(dataDashboardIitem)
  return (
    <Box>
      {isFetched ? (
        <DashboardTempplate
          dataResult={dataDashboardIitem}
          dataBar={mockData.mockBar}
          dataPie={mockData.mockPie}
          dataLine={mockData.mockLine}
        />
      ) : (
        <DashboardLoader />
      )}
    </Box>
  )
}

export default Dashboard
