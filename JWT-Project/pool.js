import pg from 'pg'

function connectDatabase() {
    const pool = new pg.Pool({
        user: 'postgres',
        password: 'k',
        database: 'sleepearn',
        host: 'localhost'
    })
    return pool
}
export { connectDatabase }