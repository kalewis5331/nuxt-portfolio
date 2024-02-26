import axios from 'axios'

export default defineEventHandler(async () => {
  try {
    const res = await axios.get(
      'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json',
    )
    return res.data
  } catch (err) {
    return []
  }
})
