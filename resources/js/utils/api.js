import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'http://127.0.0.1:8000',
  headers: { Accept: 'application/json' },
})