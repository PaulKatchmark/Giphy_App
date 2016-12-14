app.controller('NavController', NavController);

function NavController(favorite, $location) {
  var vm = this;
  vm.mirror = favorite;

  console.log('NavController loaded');

  if (favorite.favoritedGifs().length === 0) {
    favorite.getFavoritedGifs();
  }
}
