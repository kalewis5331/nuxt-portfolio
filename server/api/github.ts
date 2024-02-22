import axios from 'axios'

export default defineEventHandler(async () => {
  try {
    const res = await axios.get(
      'https://api.github.com/users/kalewis5331/repos',
    )
    return res.data.filter((repo: { language: string }) => repo.language)
  } catch (err) {
    return []
  }
})
