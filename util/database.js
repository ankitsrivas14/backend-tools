const mongodb = require('mongodb')
const MongodbClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongodbClient.connect('mongodb+srv://root:FarsAOedmNZg0D2T@cluster0.0xswd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(client => {
            console.log("DB Connected");
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        })
}

const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No Database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
