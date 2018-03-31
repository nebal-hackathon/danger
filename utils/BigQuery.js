import axios from 'axios'

const BASE_URL = 'https://www.googleapis.com/bigquery/v2/projects/gcp-hackathon18-icn-2914/queries'
const getAccessToken = async () => (await axios.get('http://35.185.58.196/')).data.trim()

export const query = async (query) => {
  const url = `${BASE_URL}?access_token=${await getAccessToken()}`
  try {
    return (await axios.post(url, { query })).data
  } catch (exc) {
    console.log(exc.response)
  }
}
