/**
 * Created by wildangarviandi on 5/26/16.
 */
var config = require('./../config');
var pgp = require('pg-promise')();
var connection = null;

function connectToDB() {
    connection = pgp(config.postgresDB);
}

connectToDB();

module.exports = connection;
