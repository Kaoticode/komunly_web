export const API_URL = 'https://21qjx3x0-3004.uks1.devtunnels.ms'
export const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGYxMWM2NzUzZDhiMmNlMzBhMTQyYyIsImlhdCI6MTcyNjUwOTg1MSwiZXhwIjoxNzI2NTEzNDUxfQ.46wtAGjU5dPxVIu11VUxkQ-OPcANAYZw0EiVGZ631-o'
export const userToBlock = '66e19530753d8b2ce30a151f'
/* export const blockedId = '66e08cd7753d8b2ce30a1494' */
export const initialBlockedUsers = [
  { id: '1', name: 'Ana García', username: '@anagarcia', avatarUrl: '/TwemojiWhiteCircle.svg?height=40&width=40' },
  { id: '2', name: 'Carlos López', username: '@carloslopez', avatarUrl: '/TwemojiWhiteCircle.svg?height=40&width=40' },
  { id: '3', name: 'Elena Martínez', username: '@elenamartinez', avatarUrl: '/TwemojiWhiteCircle.svg?height=40&width=40' },
  { id: '4', name: 'David Rodríguez', username: '@davidrodriguez', avatarUrl: '/TwemojiWhiteCircle.svg?height=40&width=40' },
  { id: '5', name: 'Isabel Fernández', username: '@isabelfernandez', avatarUrl: '/TwemojiWhiteCircle.svg?height=40&width=40' },
  { id: '6', name: 'Miguel Sánchez', username: '@miguelsanchez', avatarUrl: '/TwemojiWhiteCircle.svg?height=40&width=40' },
  { id: '7', name: 'Laura Torres', username: '@lauratorres', avatarUrl: '/TwemojiWhiteCircle.svg?height=40&width=40' },
  { id: '8', name: 'Javier Ruiz', username: '@javierruiz', avatarUrl: '/TwemojiWhiteCircle.svg?height=40&width=40' },
  { id: '9', name: 'Carmen Vega', username: '@carmenvega', avatarUrl: '/TwemojiWhiteCircle.svg?height=40&width=40' },
  { id: '10', name: 'Roberto Molina', username: '@robertomolina', avatarUrl: '/TwemojiWhiteCircle.svg?height=40&width=40' },
  { id: '11', name: 'Sofía Morales', username: '@sofiamorales', avatarUrl: '/TwemojiWhiteCircle.svg?height=40&width=40' },
  { id: '12', name: 'Antonio Herrera', username: '@antonioherrera', avatarUrl: '/TwemojiWhiteCircle.svg?height=40&width=40' }
]

export const blockedUsers = async (page) => {
  const response = await fetch(`${API_URL}/blocks?page=${page}&limit=5`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  })
  const data = await response.json()
  return data
}

export const blockUser = async () => {
  const response = await fetch(`${API_URL}/blocks/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({ block_to: userToBlock })
  })
  const data = await response.json()
  return data
}

export const unBlockUser = async (blockedId) => {
  await fetch(`${API_URL}/blocks/${blockedId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  })
}
