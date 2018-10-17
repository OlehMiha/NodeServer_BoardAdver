const mongoClient = require('mongodb').MongoClient;
const uriBD = "mongodb+srv://admin:Sadmin913n@cluster0-iofqt.mongodb.net/test?retryWrites=true";


function BD() {}

BD.prototype.addAverts = function(res){

	(async function() {
		try {
			const client = await mongoClient.connect(uriBD,{ useNewUrlParser: true });
			const collectionBD = client.db("bulletin_board").collection("adverts");

			let averts = {
				title: "averts",
				img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Daewoo_Lanos_front_20080110.jpg/300px-Daewoo_Lanos_front_20080110.jpg",
				engines_type: "1.5i 8V",
				fuel_consumption: "7.9",
				mark: "Daewoo",
				model: "Lanos",
				description: "Полностью перебрана ходовая часть, отрегулированная газовая установка, сделан капремонт всей электропроводки. Тонировка задних боковых стёкол, подогрев заднего стекла",
				year: 1999,
				price: 2000,
				mileage: 171000
			};

			collectionBD.insertOne(averts, function(err, result){
				if(err){
					return console.log(err);
				}
				res.send(result.ops);
			});

			client.close();
		} catch(e) {
			console.error(e)
		}

	})();
};

BD.prototype.getAverts = function(res){

	(async function() {
		try {
			const client = await mongoClient.connect(uriBD,{ useNewUrlParser: true });
			const collectionBD = client.db("bulletin_board").collection("adverts");

			collectionBD.find().toArray(function(err, results){
				res.json({results: results});
				//res.send(JSON.stringify(results, null, 3));
			});

			client.close();
		} catch(e) {
			console.error(e)
		}

	})();

};

module.exports = new BD();

