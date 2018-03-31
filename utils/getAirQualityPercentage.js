import { query } from './BigQuery'
import { getAirQuality } from './getAirQuality'

export const getAirQualityPercent = async ({latitude, longitude}) => {
    const pm25_max = (await query(`SELECT max(value) FROM [bigquery-public-data:openaq.global_air_quality]`)).rows[0].f[0].v
    const count = (await getAirQuality(latitude, longitude))
    console.log(count)
    return (count < 0 ? 0 : count)/pm25_max*100
}
