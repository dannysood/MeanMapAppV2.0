// Sets the MongoDB Database options

const userBuffer = new Buffer(process.env.DATABASE_USER, 'base64')
const user = userBuffer.toString('ascii');
const passwordBuffer = new Buffer(process.env.DATABASE_PASSWORD, 'base64')
const password = passwordBuffer.toString('ascii');
const hostBuffer = new Buffer(process.env.DATABASE_HOST, 'base64')
const host = hostBuffer.toString('ascii');
const dbnameBuffer = new Buffer(process.env.DATABASE_NAME, 'base64')
const dbname = dbnameBuffer.toString('ascii');
const portBuffer = new Buffer(process.env.DATABASE_PORT, 'base64')
const port = portBuffer.toString('ascii');


module.exports = {

    bitnami:
    {
        name: "MongoDB Service",
        url: "mongodb://" + user + ":" + password + "@" + host + "/" + dbname,
        port: port
    }

};