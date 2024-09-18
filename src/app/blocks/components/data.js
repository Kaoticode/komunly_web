export const API_URL = 'https://21qjx3x0-3004.uks1.devtunnels.ms'
export const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGYxMWM2NzUzZDhiMmNlMzBhMTQyYyIsImlhdCI6MTcyNjY3NzIzMywiZXhwIjoxNzI2NjgwODMzfQ.oVOyB-hG0in3CNk-X0Ke9Io77fFYvjmAowv9WiSecVI'
export const refToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGYxMWM2NzUzZDhiMmNlMzBhMTQyYyIsImlhdCI6MTcyNjY3NzIzMywiZXhwIjoxNzI3MjgyMDMzfQ.mAghbcIXiF5TjjU2H8L7MrC3zqdREwLZJ0G_Kwgdy0s'

export const refreshAccessToken = async (refToken) => {
  const response = await fetch(`${API_URL}/auth/refreshTokens`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ refreshToken: refToken })
  })
  if (!response.ok) {
    console.error('No se pudo refrescar el accessToken')
    return null
  }
  const data = await response.json()
  const newAccessToken = data.access_token
  return newAccessToken
}

export const blockedUsers = async (page) => {
  try {
    const response = await fetch(`${API_URL}/blocks?page=${page}&limit=5`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }

    })
    if (response.status === 401) {
      const newAccessToken = await refreshAccessToken(refToken)
      if (newAccessToken) {
        const newResponse = await fetch(`${API_URL}/blocks?page=${page}&limit=5`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${newAccessToken}`
          }
        })
        const data = newResponse.json()
        return data
      } else {
        throw new Error('No se pudo obtener el Access Token')
      }
    }
    const data = await response.json()
    return data
  } catch (e) {
    console.error('No se pudieron obtener los datos', e)
    return []
  }
}

export const blockUser = async (userToBlock) => {
  try {
    const response = await fetch(`${API_URL}/blocks/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({ block_to: userToBlock })
    })
    if (response.status === 401) {
      const newAccessToken = await refreshAccessToken(refToken)
      if (newAccessToken) {
        const newResponse = await fetch(`${API_URL}/blocks/`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${newAccessToken}`
          },
          body: JSON.stringify({ block_to: userToBlock })
        })
        const data = newResponse.json()
        return data
      } else {
        throw new Error('No se pudo obtener el Access Token')
      }
    }
    const data = await response.json()
    return data
  } catch (e) {
    console.error('No se pudo completar la accion, intente de nuevo', e)
  }
}

export const unBlockUser = async (blockedId) => {
  try {
    const response = await fetch(`${API_URL}/blocks/${blockedId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    })
    if (response.status === 401) {
      const newAccessToken = await refreshAccessToken(refToken)
      if (newAccessToken) {
        await fetch(`${API_URL}/blocks/${blockedId}`, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${newAccessToken}`
          }
        })
      } else {
        throw new Error('No se pudo obtener el Access Token')
      }
    }
  } catch (e) {
    console.error('No se pudo completar la accion, intente de nuevo', e)
  }
}
