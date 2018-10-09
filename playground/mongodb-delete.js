const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
   
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then( (result) => {
    //     console.log(result);
    // })

    // db.collection('Todos').findOneAndDelete({completed : false}).then( (result) => {
    //     console.log(result);
    // })

    // db.collection('Users').fdeleteMany( {name : 'Yash'}).then( (result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('An error occured');
    // })

    db.collection('Users').findOneAndDelete( {_id : new ObjectID('5bbd2654201b7d05f6c68219')}).then( (result) => {
        console.log(result.value);
    } , (err) => {
        console.log('errrr...');
    })

    // db.close();
});