module.exports = {
    port: process.env.PORT || 4000,
    databaseUri: 'mongodb+srv://mounika_siddagani:vibha@cluster0.fygvj.mongodb.net/voteing ?retryWrites=true&w=majority',
    //process.env.DATABASE_URI || 'mongodb://localhost/voteing',
    //'mongodb+srv://mounika_siddagani:vibha@cluster0.fygvj.mongodb.net/voting ?retryWrites=true&w=majority',
    redisConnectionUri: 'edis-14695.c281.us-east-1-2.ec2.cloud.redislabs.com:14695',
    //process.env.REDIS_CONNECTION_URI
}
