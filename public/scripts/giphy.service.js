app.service('giphy', GiphyService);

function GiphyService($http) {
  var API = 'http://api.giphy.com/v1/gifs/';
  var API_KEY = 'dc6zaTOxFJmzC';

  return {
    getRandomGif: function () {
      return $http.get(API + 'random?api_key=' + API_KEY);
    },

    searchGifByKeyword: function (keywords) {
      var separatedValues = keywords.replace(' ', '+');
      return $http.get(API + 'search?q=' + separatedValues + '&limit=5&api_key=' + API_KEY);
    },
  };
}






// angular.module('giphyApp')
//        .service('giphyService', GiphyService);
//
// function GiphyService($http) {
//   var api = 'http://api.giphy.com/v1/gifs';
//   var key = 'dc6zaTOxFJmzC';
//
//
//   this.getRandomGif = function() {
//     return $http.get(api + '/random', {
//       params: {
//         api_key: key
//       }
//     }).then(function(response){
//       return response.data.data;
//     });
//   };
//
//   this.search = function(query) {
//     return $http.get(api + '/search', {
//       params: {
//         api_key: key,
//         q: query
//       }
//     }).then(function(response){
//       console.log('Got response from API', response);
//       return response.data.data;
//     });
//   };
// }
