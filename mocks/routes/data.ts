import { ResponseData } from '../../src/client'

const generateApiData = (): ResponseData => {
  const startTime = Date.now()
  return Array.from({ length: 10000 }, (_, i) => ({
    timestamp: startTime + i * 1000,
    value: Number((Math.random() * 5).toFixed(2)),
  }))
}

module.exports = [
  {
    id: 'base',
    url: '/api/data',
    method: 'GET',
    variants: [
      {
        id: 'success',
        type: 'json',
        options: {
          status: 200,
          body: generateApiData(),
        },
      }
    ],
  },
]
