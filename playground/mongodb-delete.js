const {MongoClient, ObjectID} = require('mongodb');
const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');


    db.db(dbName).collection('Todos').deleteOne({text: 'Hi there'}).then((results) => {
        console.log(results);
    });

    // db.close();
});