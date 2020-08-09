// Sets the MongoDB Database options

module.exports = {

    bitnami:
    {
        name: "MongoDB Service",
        url: "mongodb://" + Buffer(process.env.DATABASE_USER, 'base64').toString('ascii') + ":" + Buffer(process.env.DATABASE_PASSWORD, 'base64').toString('ascii') + "@" + Buffer(process.env.DATABASE_HOST, 'base64').toString('ascii') + "/" + Buffer(process.env.DATABASE_NAME, 'base64').toString('ascii'),
        port: Buffer(process.env.DATABASE_PORT, 'base64').toString('ascii')
    }

};