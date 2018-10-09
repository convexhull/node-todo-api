const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
   
    // db.collection('Todos').findOneAndUpdate({_id : new ObjectID('5bbd2824201b7d05f6c682de')}, {
    //     $set : {
    //         completed : true
    //     }
    // } , {
    //     returnOriginal : false
    // }).then( (result) => {
    //     console.log(result);
    // })


    db.collection('Users').findOneAndUpdate({_id : new ObjectID('5bbd05f6a1af4b270a2df73b')} , {
        $set : {
            name : 'Yash'
        } , 
        $inc : {
            age : 1
        }
    }, {
        returnOriginal : false
    }).then( (result) => {
        console.log(result);
    })

    // db.close();
});