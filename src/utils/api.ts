// src/utils/api.ts
import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://devzone.blueboxonline.co.uk/api/v1',
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    // 'X-AUTH': '57230df376d73e8e1adb67a85f3fb19a'
    'X-AUTH': import.meta.env.VITE_API_X_AUTH_KEY
  },
  withCredentials: true
})

export default api
