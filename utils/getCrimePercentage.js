import { query } from 'BigQuery'

export const getAirQuality = async ({latitude, longitude }) => {
	let cri_max = await query(`SELECT sum(co) 
			FROM (
				SELECT count(*) AS co 
				FROM [bigquery-public-data:chicago_crime.crime]
	let max_percent = 100;
	return (await query(`
				SELECT (count(*)/${cri_max})*${max_percent} FROM (
				SELECT latit, longi, (POW(ABS(${latitude} - latitude),2) + POW(ABS(${longitude} - longitude),2) AS distance
					FROM [bigquery-public-data:chicago_crime.crime]
					ORDER BY distance desc LIMIT 1
					)) WHERE latitude = latit AND longitude = longi
			`));
	
}
