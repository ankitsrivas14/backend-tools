const mongodb = require('mongodb')
const MongodbClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongodbClient.connect('mongodb+srv://root:FarsAOedmNZg0D2T@cluster0.0xswd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(result => {
            console.log("DB Connected");
            callback(result);
        })
        .catch(err => {
            console.log(err);
        })

}

module.exports = mongoConnect;
