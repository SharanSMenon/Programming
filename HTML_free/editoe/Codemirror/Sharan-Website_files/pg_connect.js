var pg = require('pg');
var connectStr = "pg://postgres:kingini123@PostGreSQL 9.6:5432/bank";
var client = new pg.Client(connectStr);
client.connect();
