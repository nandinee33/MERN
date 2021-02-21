// require mongoose
// require command is like import command
const mongoose = require ('mongoose')

// connecting MongoDB with mongoose
// 27017 is the port address
// here studentDB is the database name
mongoose.connect("mongodb://127.0.0.1:27017/studentDB",

// these all are depicted warning (to ye warnings na aye so we use these)
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
}
)
// if connection is established we go to then otherwise we goto catch
// and we have to use arrow functions here
.then(()=>console.log("Connection Successfull...!!"))
.catch(()=>console.log("Error, Not Connecting...!!"))


// creating schema
const studentSchema = new mongoose.Schema(
    {
        // there are 8 different data structures that can be used with the schema
        // we can also apply some validations along with it
        name:{ type:String, required: true},
        course:String,
        duration:Number,
        reg:Boolean,
        date:{ type: Date, default: Date.now },
    }
);

// after creating schema we create model
// with the help of model we can create collection name
// and to perform CRUD operation we need collection so without collection we can not perform anything means without model we can not do any operations so it is important to create model
const Student = mongoose.model("Student",studentSchema)
// here Student is the collection name and studentSchema is the schema name


// Creating Document
const data1 = new Student(
{
    name: "manish",
    course:"mtech",
    duration: 2,
    reg: true
});


// now we have to store this data using data1.save
// data1.save()
// .then(doc=>console.log("Document Created"))
// .catch(err=>console.log(err));




// now to check our data is created or not open cmd and run
// > show dbs
// > use studentDB
// > show collections
// students
// Jab hum model banate h to jo collection banti h vo plural me banti h ex. model me Student h to collection me students
// > db.students.find().pretty()
// {
//         "_id" : ObjectId("602d5abced67b11e8c2a378d"),
//         "name" : "manish",
//         "course" : "mtech",
//         "duration" : 2,
//         "reg" : true,
//         "date" : ISODate("2021-02-17T18:04:44.240Z"),
//         "__v" : 0
// }






// now creating multiple records
const data2 = new Student(
    {
        name: "naina",
        course:"btech",
        duration: 4,
        reg: true
    });
const data3 = new Student(
    {
        name: "somu",
        course:"bca",
        duration: 3,
        reg: true
    });
const data4 = new Student(
    {
        name: "neeti",
        course:"bcom",
        duration: 3,
        reg: true
    });





// INSERTION
// now we have to insert all records at the same time
// so if we want to insert all records at a time then we can do this with the help to the model
// for insering multiple records we have to use modelName.insertMany[(no to data we want to insert)]
// Student.insertMany([data2, data3, data4])
//     .then((doc)=>console.log("all data inserted successfully"))
//     .catch((err)=>console.log(("Error in insertion"),err));


// to display the records we called find query
// Student.find()
//     .then((doc)=>console.log(doc))
//     .catch((err)=>console.log(("Error in insertion"),err));







//UPDATION
// now we want to update anything
// we can update data using primary key which is _id
// using this method we find and at the same time we update it by _id
// Student.findByIdAndUpdate('602d650219c7001044d232c8',{duration:4})
//     .then((doc)=>console.log(doc))
//     .catch((err)=>console.log(("Error in Updation"),err));





//DELETION
// Student.findByIdAndDelete('602d650219c7001044d232c8')
//     .then((doc)=>console.log(doc))
//     .catch((err)=>console.log(("Error in Delete"),err));