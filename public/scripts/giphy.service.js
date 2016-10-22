angular.module('giphyApp')
       .service('giphyService', GiphyService);

function GiphyService($http) {
  var api = 'http://api.giphy.com/v1/gifs';
  var key = 'dc6zaTOxFJmzC';


  this.getRandomGif = function() {
    return $http.get(api + '/random', {
      params: {
        api_key: key
      }
    }).then(function(response){
      return response.data.data;
    });
  };

  this.search = function(query) {
    return $http.get(api + '/search', {
      params: {
        api_key: key,
        q: query
      }
    }).then(function(response){
      console.log('Got response from API', response);
      return response.data.data;
    });
  };
}
