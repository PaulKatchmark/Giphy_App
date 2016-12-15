app.service('favorite', FavoriteService);

function FavoriteService($http) {
  var favorites = [];
  var counter = {
    count: favorites.length,
  };

  function postFavorite(gif) {
    console.log('inside postFavorite function ', gif);
    return $http.post('/favorite', gif)
      .then(function (response) {
        getFavorites();
      });
  }

  function getFavorites() {
    return $http.get('/favorite')
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
