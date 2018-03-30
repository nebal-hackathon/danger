import axios from 'axios'

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json'
const API_KEY = 'AIzaSyBvrJV9dTwF2mD8r1MU5Ii-2GkhncKhGFk'

export const getAddress = async ({ latitude, longitude }) => {
  return (await axios.get(`${BASE_URL}?latlng=${latitude},${longitude}&key=${API_KEY}&language=ko`)).data.results[0].formatted_address
}