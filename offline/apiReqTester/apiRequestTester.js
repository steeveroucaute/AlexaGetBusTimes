const request = require('request-promise');

const options = {
	method: 'GET',
	uri: ' https://api.tfl.gov.uk/StopPoint/490012165S/Arrivals?app_id=bb3622c2&app_key=1648a368a0db8678a6b34e5a387c6eb2',
	json: true
}

// console.log(Math.floor(565/60));


request(options)
	.then(function (response) {
		var arrivals = [];
		// console.log(length);
		for (var i in response) {
			console.log("Arrival time bus "  + i + " : " + Math.floor(response[i].timeToStation/60) + " mins");
			arrivals.push(Math.floor(response[i].timeToStation/60));
		}
		// console.log(Math.floor(response[1].timeToStation/60
		console.log(arrivals.sort());

		console.log('SUCCESS');
	})
	.catch(function(err){
		console.log("ERROR\n" + err);
	})



