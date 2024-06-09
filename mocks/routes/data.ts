import { generateApiData } from '../utilities/generateApiData'

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
