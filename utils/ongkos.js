const request = require("request");

const options = {
  method: 'POST',
  url: 'https://api.rajaongkir.com/starter/cost',
  headers: {key: '5f00798f71bd328e3080fd23e653d41a', 'content-type': 'application/x-www-form-urlencoded'},
  form: {origin: '501', destination: '114', weight: 1700, courier: 'jne'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

module.exports = options