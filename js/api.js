const request = require('request');

const options = {
  method: 'GET',
  url: 'https://dictionary35.p.rapidapi.com/wordSearchTurkish',
  qs: {query: 'kalem'},
  headers: {
    'X-RapidAPI-Key': '02b9f9a83dmsh2a3594d1f63a0cep1266a1jsnc64764a1632f',
    'X-RapidAPI-Host': 'dictionary35.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
