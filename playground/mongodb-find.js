const {MongoClient, ObjectID} = require('mongodb');
const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');



    // db.db(dbName).collection('Todos').find({
    //     _id: new ObjectID('5acf6b153e393474bf82c859')
    // }).toArray((err, docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.db(dbName).collection('Todos').find().count((err, docs) => {
        console.log(`Todos count: ${docs}`);
    }, (err) => {
        console.log('Unable to count todos', err);
    });

    // db.close();
});