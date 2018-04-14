const {MongoClient, ObjectID} = require('mongodb');
const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    db.db(dbName).collection('Users').findOneAndUpdate({
        _id: new ObjectID('5acf67909758332444d14569')
    }, {
        $set: {
            name: 'Peter'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((results) => {
        console.log(results);
    });

    // db.close();
});