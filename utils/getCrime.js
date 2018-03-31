import { query } from './BigQuery'

const norm = 0.005

export const getCrime = async ({latitude, longitude }) => {
return (await query(`SELECT count(*) FROM [bigquery-public-data:chicago_crime.crime]
			WHERE longitude < ${longitude} + ${norm}
			AND longitude > ${longitude} - ${norm}
			AND latitude < ${longitude} + ${norm}
			AND latitude > ${longitude} - ${norm}
`))
}
