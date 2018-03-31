import { query } from 'BigQuery'

const norm = 0.005

export const getCollision = async ({latitude, longitude }) => {
return (await query(`SELECT * FROM [bigquery-public-data:new_york.nypd_mv_collisions]
			WHERE longitude < ${longitude} + ${norm}
			AND longitude > ${longitude} - ${norm}
			AND latitude < ${longitude} + ${norm}
			AND latitude > ${longitude} - ${norm}
`))
}
