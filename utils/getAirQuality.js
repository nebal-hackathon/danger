import { query } from 'BigQuery'

export const getAirQuality = async ({latitude, longitude }) => {
	return (await query(`SELECT *, POW(ABS(${latitude} - latitude),2) + POW((${longitude} - longitude),2) AS distance
				FROM [bigquery-public-data:openaq.global_air_quality]
				WHERE pollutant='pm25'
				ORDER BY distance desc
				LIMIT 1;
				`))
}
