let pg = require('pg');

const {Pool, Client} = require('pg')
const connectionString = 'postgresql://postgres:Nomula23!@localhost:5432/protractorDB'

// var connectionString = "postgres://postgres:Nomula23!@localhost:5432/protractorDB";
// var pgClient = new pg.Client(connectionString);
const client = new Client({
    connectionString:connectionString
})

client.connect();

client.query('SELECT * from employee', (err,res)=> {
    console.log(err, res)
    client.end()
})

//second way
class postgresDB{
    
    static async fetchQuery(query){
        const res = await client.query(query);
        console.log(res);
        return res;
    }

    static endConnection(){
        client.end();
    }
}
module.exports = postgresDB;
