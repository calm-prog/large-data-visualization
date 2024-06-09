import { useEffect, useState } from 'react'
import { ResponseData, getData } from './client'
import { LineChart } from '@mui/x-charts'
import { filterToUniqueValues } from './utilities/filterToUniqueValues'

function App(): JSX.Element {
  const [data, setData] = useState<ResponseData>([])

  useEffect(() => {
    getData().then((responseData) => {
      const uniqueItems = filterToUniqueValues(responseData)
      setData(uniqueItems)
    })
  }, [])

  return (
    <main>
      {data.length > 0 && (
        <LineChart
          height={700}
          xAxis={[
            {
              dataKey: 'timestamp',
              valueFormatter: (value) => new Date(value).toLocaleTimeString()
            },
          ]}
          series={[{dataKey: 'value'}]}
          dataset={data}
        />
      )}
    </main>
  )
}

export default App
