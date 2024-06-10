import { useEffect, useState } from 'react'
import { ResponseData, getData } from './client'
import { LineChart } from '@mui/x-charts'
import { filterToUniqueValues } from './utilities/filterToUniqueValues'
import { Button } from '@mui/material'
import { createChunksOfAverage } from './utilities/createChunksOfAverage'

function App(): JSX.Element {
  const [data, setData] = useState<ResponseData>([])
  const [showTrends, setShowTrends] = useState(false)
  const chunkedData = createChunksOfAverage(data)

  useEffect(() => {
    getData().then((responseData) => {
      const uniqueItems = filterToUniqueValues(responseData)
      setData(uniqueItems)
    })
  }, [])

  return (
    <main>
      {data.length > 0 && (
        <>
          <LineChart
            height={700}
            xAxis={[
              {
                dataKey: 'timestamp',
                valueFormatter: (value) =>
                  new Date(value).toLocaleTimeString(),
              },
            ]}
            series={[{ dataKey: 'value' }]}
            dataset={showTrends ? chunkedData : data}
          />
          <Button
            variant="outlined"
            onClick={() => setShowTrends(!showTrends)}
            style={{marginInline: '1rem'}}
          >
            {showTrends ? 'Show raw data' : 'Show trends'}
          </Button>
        </>
      )}
    </main>
  )
}

export default App
