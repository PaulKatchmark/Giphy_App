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
