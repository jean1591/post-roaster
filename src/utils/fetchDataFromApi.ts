export async function fetchDataFromApi<T>(endpoint: string): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  const response = await fetch(`${baseUrl}/${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.json()
}
