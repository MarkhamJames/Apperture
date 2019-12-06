import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})


export const loginUser = async (loginData) => {
  try {
    const resp = await api.post('/auth/login', loginData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    localStorage.setItem('authToken', resp.data.token);
    return resp.data.user
  } catch (e) {
    return { error: "invalid credentials" }
  }
}

export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/users', { user: registerData });
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    localStorage.setItem('authToken', resp.data.token);
    return resp.data.user
  } catch (e) {
    return { error: "invalid credentials" }
  }
}

export const verifyUser = async () => {
  const token = localStorage.authToken;
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify')
    return resp.data
  }
  return false
}

export const getAllLocales = async () => {
  const resp = await api.get('/locales')
  return resp.data
}

export const getOneLocale = async (localeId) => {
  const resp = await api.get(`/locales/${localeId}`)
  return resp.data
}

export const getUserLocales = async (userId) => {
  const resp = await api.get(`/users/${userId}/locales`)
  return resp.data
}

export const getUserLocale = async (userId, localeId) => {
  const resp = await api.get(`/users/${userId}/locales/${localeId}`)
  return resp.data
}

export const postLocale = async (userId, localeData) => {
  const resp = await api.post(`/users/${userId}/locales`, localeData)
  return resp.data
}

export const putLocale = async (localeId, localeData) => {
  const resp = await api.put(`/users/userId/locales/${localeId}`, localeData)
  return resp.data
}

export const deleteLocale = async (userId, localeId) => {
  const resp = await api.delete(`/users/${userId}/locales/${localeId}`)
  return resp.data
}
export const getReviews = async (localeId) => {
  const resp = await api.get(`/locale/${localeId}/reviews`)
  return resp.data
}

export const postReview = async (localeId, reviewData) => {
  const resp = await api.post(`/locales/${localeId}/reviews`, reviewData)
  console.log(localeId)
  return resp.data
}

export const putReview = async (reviewId, reviewData) => {
  const resp = await api.put(`/locales/localeId/review/${reviewId}`, reviewData)
  return resp.data
}

export const deleteReview = async (localeId, reviewId) => {
  const resp = await api.delete(`/locale/${localeId}/reviews/${reviewId}`)
  return resp.data
}

export const getOneUser = async (userId) => {
  const resp = await api.get(`/users/${userId}`)
  return resp.data
}
