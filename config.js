/**
 * Created by wildangarviandi on 5/26/16.
 */

var config = {
    googlekey:"asdasdf"
};

config.env = process.env.NODE_ENV || 'development';
config.port = process.env.PORT || 2001;
if (config.env == 'production') {
    config.postgresDB = {

    }
} else {
    config.postgresDB = {
        host:'localhost',
        port:5432,
        database:'mocover',
        user:'wildangarviandi'
    }
}

module.exports = config;
