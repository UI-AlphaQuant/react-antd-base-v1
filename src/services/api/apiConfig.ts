import apiClient from './apiClient'

// Generic GET request
export const getData = async (endpoint: string, params?: object) => {
  const response = await apiClient.get(endpoint, { params })
  return response.data
}

// POST request
export const postData = async (endpoint: string, payload: object) => {
  const response = await apiClient.post(endpoint, payload)
  return response.data
}

// PUT request
export const putData = async (endpoint: string, payload: object) => {
  const response = await apiClient.put(endpoint, payload)
  return response.data
}

// DELETE request
export const deleteData = async (endpoint: string) => {
  const response = await apiClient.delete(endpoint)
  return response.data
}
