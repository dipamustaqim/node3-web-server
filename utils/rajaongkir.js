const request = require ('request') 

const ongkir = (id, callback) => {
    const url = 'https://api.rajaongkir.com/starter/province?id=' + id + '&key=5f00798f71bd328e3080fd23e653d41a'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('unable to connect', undefined)
        } else if(body.rajaongkir.status.code === 400){
            callback(undefined, body.rajaongkir.status.description)
        } else{  
            callback(undefined, body.rajaongkir.results)
        }
    })
    //console.log(url)
}

module.exports = ongkir