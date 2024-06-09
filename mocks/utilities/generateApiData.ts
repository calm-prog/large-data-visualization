import { ResponseData } from '../../src/client'

export const generateApiData = (): ResponseData => {
  const startTime = Date.now()
  return Array.from({ length: 10000 }, (_, i) => ({
    timestamp: startTime + i * 1000,
    value: Number((Math.random() * 5).toFixed(2)),
  }))
}
