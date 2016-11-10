var _ = require('lodash/core');
const request = require('request-promise');
//configure call for request-promise
const options = {
	method: 'GET',
	uri: ' https://api.tfl.gov.uk/StopPoint/490012165S/Arrivals?app_id=bb3622c2&app_key=1648a368a0db8678a6b34e5a387c6eb2',
	json: true
}
//GET arrival times from API
request(options)
	//success push into arrivals array 
	.then(function (response) {
		var arrivals = [];
		for (var i in response) {
			console.log("Arrival time bus "  + i + " : " + Math.floor(response[i].timeToStation/60) + " mins");
			arrivals.push(Math.floor(response[i].timeToStation/60));
		}
		console.log(_.sortBy(arrivals));
		//sort data within arrivals
		arrivals = _.sortBy(arrivals);
		//loop through arrivals array
		for (var z in arrivals){
			console.log(arrivals[z]);
		}
		
		console.log('SUCCESS');
		
	})
	//error handling
	.catch(function(err){
		console.log("ERROR\n" + err);
	})




