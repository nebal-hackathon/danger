import { query } from './BigQuery'
import { getCollision } from './getCollision'

export const getCollisionQuality = async ({latitude, longitude}) => {
	// const cri_max = (await query(`SELECT count(*) FROM [bigquery-public-data:new_york.nypd_mv_collisions]`)).rows[0].f[0].v
	const count = (await getCollision({ latitude, longitude })).rows[0].f[0].v.toString()
	return Number(count) + 5
}
