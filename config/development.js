
module.exports = Object.assign({

  host: 'http://atlas.host',

  endpoint(path='') {
    return this.host+'/api/v1'+path
  }

})