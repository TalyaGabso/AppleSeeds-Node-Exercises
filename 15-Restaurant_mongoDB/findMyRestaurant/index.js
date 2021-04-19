const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "findMyRestaurant";

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(error, client) => {
		if (error) {
			return console.log("Unable to connect to database!");
		}
		const db = client.db(databaseName);

		//----- collection-----//

		// db.collection("restaurants").insertMany([
		// 	{
		// 		name: "bombay",
		// 		address: {
		// 			city: "Holon",
		// 			street: "Herzel 15",
		// 			coordinates: [-77.46574, 40.6774],
		// 		},
		// 		cuisine: "indian",
		// 		kosher: true,
		// 		reviews: [
		// 			{
		// 				date: new Date("2016-01-01"),
		// 				score: 7,
		// 			},
		// 			{
		// 				date: new Date("2019-01-01"),
		// 				score: 3,
		// 			},
		// 			{
		// 				date: new Date("2018-01-01"),
		// 				score: 8,
		// 			},
		// 		],
		// 	},
		// 	{
		// 		name: "falafel 5 shekels",
		// 		address: {
		// 			city: "Bat-Yam",
		// 			street: "Histradrut 85",
		// 			coordinates: [-70.46574, 10.6774],
		// 		},
		// 		cuisine: "street food",
		// 		kosher: false,
		// 		reviews: [
		// 			{
		// 				date: new Date("2019-01-01"),
		// 				score: 3,
		// 			},
		// 			{
		// 				date: new Date("2016-01-01"),
		// 				score: 8,
		// 			},
		// 			{
		// 				date: new Date("2020-01-01"),
		// 				score: 4,
		// 			},
		// 		],
		// 	},
		// 	{
		// 		name: "asian delight",
		// 		address: {
		// 			city: "Tel Aviv",
		// 			street: "Balfur 15",
		// 			coordinates: [-10.46574, 30.6774],
		// 		},
		// 		cuisine: "asian",
		// 		kosher: true,
		// 		reviews: [
		// 			{
		// 				date: new Date("2020-01-01"),
		// 				score: 3,
		// 			},
		// 			{
		// 				date: new Date("2018-01-01"),
		// 				score: 8,
		// 			},
		// 			{
		// 				date: new Date("2016-01-01"),
		// 				score: 9,
		// 			},
		// 		],
		// 	},
		// 	{
		// 		name: "coconut jam",
		// 		address: {
		// 			city: "Tel Aviv",
		// 			street: "Stam Adress 15",
		// 			coordinates: [20.46574, -40.6774],
		// 		},
		// 		cuisine: "african",
		// 		kosher: true,
		// 		reviews: [
		// 			{
		// 				date: new Date("2017-01-01"),
		// 				score: 10,
		// 			},
		// 			{
		// 				date: new Date("2016-01-01"),
		// 				score: 8,
		// 			},
		// 			{
		// 				date: new Date("2019-01-01"),
		// 				score: 6,
		// 			},
		// 		],
		// 	},
		// 	{
		// 		name: "rice and noodles",
		// 		address: {
		// 			city: "Holon",
		// 			street: "Bla Bla 15",
		// 			coordinates: [20.46574, 10.6774],
		// 		},
		// 		cuisine: "asian",
		// 		kosher: false,
		// 		reviews: [
		// 			{
		// 				date: new Date("2016-01-01"),
		// 				score: 1,
		// 			},
		// 			{
		// 				date: new Date("2019-01-01"),
		// 				score: 6,
		// 			},
		// 			{
		// 				date: new Date("2019-01-01"),
		// 				score: 2,
		// 			},
		// 		],
		// 	},
		// 	{
		// 		name: "thailand paradise",
		// 		address: {
		// 			city: "Holon",
		// 			street: "Bla 13",
		// 			coordinates: [-77.46574, 40.6774],
		// 		},
		// 		cuisine: "asian",
		// 		kosher: false,
		// 		reviews: [
		// 			{
		// 				date: new Date("2020-01-01"),
		// 				score: 7,
		// 			},
		// 			{
		// 				date: new Date("2019-01-01"),
		// 				score: 6,
		// 			},
		// 			{
		// 				date: new Date("2020-01-01"),
		// 				score: 2,
		// 			},
		// 		],
		// 	},
		// ],(error,result)=>{
		//   if(error){
		//     return console.log("Unable to insert documents");
		//   }
		//   console.log(result.ops);
		// });

		//----- 1.Crud Queries -----//
		//READ

		// 1.1 – Write a MongoDb query to display all the documents in the restaurant collection.
		// db.collection("restaurants")
		// 	.find({})
		// 	.toArray((error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to get data");
		// 		}
		// 		console.log(result);
		// 	});

		// 1.2 - Write a MongoDb query to display all restaurants that have a specific cuisine
		// db.collection("restaurants")
		// 	.find({cuisine:"african"})
		// 	.toArray((error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to get data");
		// 		}
		// 		console.log(result);
		// 	});

		// 1.3 - Write a MongoDb query that displays only kosher restaurants
		// db.collection("restaurants")
		// 	.find({kosher:true})
		// 	.toArray((error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to get data");
		// 		}
		// 		console.log(result);
		// 	});

		// 1.4 - Write a MongoDb query that displays only a specific cities restaurants
		// db.collection("restaurants")
		// 	.find({ "address.city": "Tel Aviv" })
		// 	.toArray((error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to get data");
		// 		}
		// 		console.log(result);
		// 	});

		// 1.5 - Write a MongoDb query to display a specific restaurants address
		// db.collection("restaurants")
		// 	.find({ "address.city": "Holon","address.street": "Bla 13" })
		// 	.toArray((error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to get data");
		// 		}
		// 		console.log(result);
		// 	});

		// 1.6 - Write a MongoDb query to display a specific restaurants coordinates
		// db.collection("restaurants")
		// 	.find({ "address.coordinates": [-70.46574, 10.6774] })
		// 	.toArray((error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to get data");
		// 		}
		// 		console.log(result);
		// 	});

		// 1.7. - Write a MongoDb query that should display all restaurants in ascending order by restaurant name.
		// db.collection("restaurants")
		// 	.find({})
		// 	.sort({ name: 1, _id: 1 })
		// 	.toArray((error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to get data");
		// 		}
		// 		console.log(result);
		// 	});

		// 1.8 - Write a MongoDb query that should display all restaurants in ascending order by city names.
		// db.collection("restaurants")
		// 	.find({})
		// 	.sort({ "address.city": 1, _id: 1 })
		// 	.toArray((error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to get data");
		// 		}
		// 		console.log(result);
		// 	});

		// UPDATE

		// 1.9 - Update a specific restaurant's name
		// db.collection("restaurants")
		// 	.updateOne({name:"bombay"},{$set:{name:"Mombay"}},(error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to get data");
		// 		}
		// 		console.log(result.result);
		// 	});

		// 1.10 - Update a specific restaurant by adding a new review.
		// db.collection("restaurants").update(
		// 	{ name: "coconut jam"},
		// 	{
		// 		$push: {
		// 			reviews: {
		// 				date: new Date("2021-04-19"),
		// 				score: 8,
		// 			},
		// 		},
		// 	},
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to get data");
		// 		}
		// 		console.log(result.result);
		// 	}
		// );

		// 1.11 - Update all restaurants to be kosher
		// db.collection("restaurants").updateMany(
		// 	{kosher:false},{$set:{kosher:true}},
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to get data");
		// 		}
		// 		console.log(result.result);
		// 	}
		// );

		//DELETE

		// 1.12 - Delete a specific restaurant
		// db.collection("restaurants").deleteOne(
		// 	{ name: "rice and noodles" },
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to get data");
		// 		}
		// 		console.log(result.result);
		// 	}
		// );

		// 1.13 - Delete all restaurants
		// db.collection("restaurants").deleteMany({}, (error, result) => {
		// 	if (error) {
		// 		return console.log("Unable to get data");
		// 	}
		// 	console.log(result.result);
		// });

		// 1.14 – Increment a specific restaurants score by 2
		// db.collection("restaurants").update(
		// 	{ name: "asian delight" },
		// 	{ $inc: { "reviews.0.score": 2 } },
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to get data");
		// 		}
		// 		console.log(result.result);
		// 	}
		// );

		// 1.15 – Decrement a specific restaurants score by 1
		// db.collection("restaurants").update(
		// 	{ name: "asian delight" },
		// 	{ $inc: { "reviews.1.score": -1 } },
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to get data");
		// 		}
		// 		console.log(result.result);
		// 	}
		// );

		//----- 2. forEach Queries -----//
		// 2.2 - Write a MongoDb query to print all restaurant cities
		// db.collection("restaurants")
		// 	.find({})
		// 	.forEach((restaurant) => console.log(restaurant.address.city));

		//----- 3. Advanced Queries -----//
		// 3.1 - Query for restaurant names that start with a specific alphabet
		// db.collection("restaurants")
		// 	.find({ name: { $regex: /^t/i} })
		// 	.toArray((error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to get data");
		// 		}
		// 		console.log(result);
		// 	});
		// 3.2 - Query how many documents you have from the restaurant collection.
		// db.collection("restaurants").countDocuments({}, (error, result) => {
		// 	if (error) {
		// 		return console.log("Unable to get data");
		// 	}
		// 	console.log(result);
		// });
	
    // 3.3 - Write a MongoDb query to get restaurants that include reviews from a specific date.
		db.collection("restaurants")
			.find({})
			.toArray((error, result) => {
				if (error) {
					return console.log("Unable to get data");
				}
				console.log(result);
			});
	}
);
