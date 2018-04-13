const MongoClient = require('mongodb').MongoClient;
const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    // db.db(dbName).collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.db(dbName).collection('Users').insertOne({
        name: 'Anna',
        age: 20,
        location: 'Hanoi'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});