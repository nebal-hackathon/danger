import { query } from 'BigQuery'

export const getAirQuality = async ({latitude, longitude }) => {
	let col_max = await query(`SELECT sum(co) 
			FROM (
				SELECT count(*) AS co 
				FROM [bigquery-public-data:new_york.nypd_mv_collisions])
	let max_percent = 100
	return (await query(`
			SELECT (count(*)/${col_max})*${max_percent} FROM (
    SELECT POW(ABS(${latitude} - latitude),2) + POW(ABS(${longitude} - longitude),2) AS distance
    FROM [bigquery-public-data:new_york.nypd_mv_collisions]
      ORDER BY distance desc LIMIT 1
    )
			`));
	
}
