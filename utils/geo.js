import axios from 'axios';

export const lookupAddress = async (longitude, latitude) => {
  const requestData = {
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    validateStatus (status) {
      return status < 500
    },
    params: {
      language: 'ko',
      key: 'AIzaSyC_SJNdgsT_cXjEvMzn4fJuxTzSHA53gYM',
      latlng: latitude + ',' + longitude
    }
  }
  const response = await axios(requestData)

  let currentAddress = ''
  for (address_component of response.data.results[0].address_components.reverse()) {
    if (address_component['types'].indexOf('locality') !== -1
      || address_component['types'].indexOf('sublocality') !== -1
      || address_component['types'].indexOf('establishment') !== -1
      || address_component['types'].indexOf('point_of_interest') !== -1
      || address_component['types'].indexOf('premise') !== -1) {
      currentAddress += address_component['short_name'] + ' '
    }
  }
  return currentAddress
}
