import { query } from './BigQuery'
import { getCrime } from './getCrime'

export const getCrimeQuality = async ({latitude, longitude}) => {
	const cri_max = (await query(`SELECT count(*) FROM [bigquery-public-data:chicago_crime.crime]`)).rows[0].f[0].v
	const count = (await getCrime({ latitude, longitude })).rows[0].f[0].v
	return count/cri_max*100 + 10
}
