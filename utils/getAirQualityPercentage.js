import { query } from 'BigQuery'

export const getAirPercentage = async ({latitude, longitude }) => {
	let pm25_max = await query(`SELECT max(value) FROM [bigquery-public-data:openaq.global_air_quality]`);
	let max_percent = 100;
	return (await query(`
				SELECT GREATEST(value,0)/${pm25_max})*${max_percent} FROM (
				SELECT latit, longi, value, (POW(ABS(${latitude} - latitude),2) + POW(ABS(${longitude} - longitude),2) AS distance
					FROM [bigquery-public-data:openaq.global_air_quality]
					WHERE pollutant = "pm25"
					ORDER BY distance desc LIMIT 1;
					))
			`);
	
}
