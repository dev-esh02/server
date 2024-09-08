const pg = require("pg");
const { Client } = pg;
const client = new Client({
  user: "postgre",
  password: "rootUser",
  host: "localhost",
  port: 5432,
  database: "Demo_DB",
});

client.connect();

client.query(`Select * FROM Student`, (err, res) => {
  if (!err) console.log(res.rows);
  else console.error(err.message);
  client.end();
});
