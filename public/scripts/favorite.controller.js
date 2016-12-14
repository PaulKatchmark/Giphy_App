app.controller('FavoriteController', FavoriteController);

function FavoriteController(favorite) {
  var self = this;
  self.gifs = [];

  console.log('FavoriteController loaded');

  if (favorite.favoritedGifs().length === 0) {
    favorite.getFavoritedGifs()
      .then(function () {
        self.gifs = favorite.favoritedGifs();
      });
  } else {
    self.gifs = favorite.favoritedGifs();
  }
}
