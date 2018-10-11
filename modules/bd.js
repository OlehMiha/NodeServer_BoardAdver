function BD() {
	this.mongoClient = require('mongodb').MongoClient;
	this.uriBD = "mongodb+srv://admin:Sadmin913n@cluster0-iofqt.mongodb.net/test?retryWrites=true";
}

BD.prototype.addUser = function(){

	console.error('вызов');

	(async function() {
		try {
			const client = await this.mongoClient.connect(this.uriBD,{ useNewUrlParser: true });
			const collectionBD = client.db("bulletin_board").collection("adverts");

			let user = {name: "Tom", age: 23};

			collectionBD.insertOne(user, function(err, result){

				if(err){
					return console.log(err);
				}
				console.log(result.ops);
			});

			client.close();
		} catch(e) {
			console.error(e)
		}

	})()


	//
	// this.mongoClient.connect(this.uriBD, { useNewUrlParser: true }, function(err, client) {
	// 	const collectionBD = client.db("bulletin_board").collection("adverts");
	//
	// 	let user = {name: "Tom", age: 23};
	//
	// 	collectionBD.insertOne(user, function(err, result){
	//
	// 		if(err){
	// 			return console.log(err);
	// 		}
	// 		console.log(result.ops);
	// 		client.close();
	// 	});
	// });
};

module.exports = new BD();

