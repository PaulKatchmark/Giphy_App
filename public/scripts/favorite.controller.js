app.controller('FavoriteController', FavoriteController);

function FavoriteController(favorite) {
  var vm = this;
  vm.gifs = [];

  console.log('FavoriteController loaded');
  console.log('console log function ', favorite.favoritedGifs());
  if (favorite.favoritedGifs().length === 0) {
    favorite.getFavoritedGifs()
      .then(function () {
        vm.gifs = favorite.favoritedGifs();
      });
  } else {
    vm.gifs = favorite.favoritedGifs();
  }
}
