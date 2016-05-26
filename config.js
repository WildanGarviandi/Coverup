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
        host:'ec2-54-243-202-113.compute-1.amazonaws.com',
        database:'d4ctoo3avpc4hj',
        user:'yspwyfxyheiwzu',
        port:5432,
        password:'5KUKARRj4iKEtgJzyf-Hx88KYr',
        
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
