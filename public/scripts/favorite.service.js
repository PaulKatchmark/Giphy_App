app.service('favorite', FavoriteService);

function FavoriteService($http) {
  var favorites = [];
  var counter = {
    count: favorites.length,
  };

  function postFavorite(gif) {
    return $http.post('/faves', gif)
      .then(function (response) {
        getFavorites();
      });
  }

  function getFavorites() {
    return $http.get('/faves')
      .then(function (response) {
        console.log('GET received', response);
        favorites = response.data;
        counter.count = favorites.length;
      });
  }

  return {
    favoritedGifs: function () {
      return favorites;
    },

    favoriteCounter: counter,
    addGifToFavorites: postFavorite,
    getFavoritedGifs: getFavorites,
  };
}
