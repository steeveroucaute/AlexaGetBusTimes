const request = require('request-promise');  

const options = {  
  method: 'GET',
  uri: 'https://api.tfl.gov.uk/StopPoint/490012165S/Arrivals?app_id=bb3622c2&app_key=1648a368a0db8678a6b34e5a387c6eb2',
  json: true 
}
​
exports.handler = (event, context, callback) => {
    // TODO implement
    request(options)  
  .then(function (response) {
    // Request was successful, use the response object at will
    console.log(response);
  })
  .catch(function (err) {
    // Something bad happened, handle the error
    console.log(err);
  })
    
    
    //setup response from Lambda
    callback(null, 'Hello world');
};