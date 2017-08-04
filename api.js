const axios = require('axios');

module.exports = {
  newsGet: function(source) {
    if (source === 'die-zeit') {
      var url = 'https://newsapi.org/v1/articles?source='+ source + '&sortBy=latest&apiKey=4612bc0b8dfe4a30ae22bd62bf7cffa4'
    } else {
      url = 'https://newsapi.org/v1/articles?source='+ source + '&sortBy=top&apiKey=4612bc0b8dfe4a30ae22bd62bf7cffa4'
    }
    return axios.get(url).then(function(response) {
      return response.data
    })
  },
}
