app.controller('MainController', MainController);

function MainController(giphy, favorite) {
  var vm = this;
  vm.gifs = [];

  console.log('MainController loaded');

  getRandom();

  /** ---- BOUND FUNCTIONS ---- **/
  vm.displayRandomGif = function () {
    getRandom();
  };

  vm.searchAndDisplayGifs = function () {
    giphy.searchGifByKeyword(vm.keywords)
      .then(function (response) {
        console.log('array response', response);
        vm.gifs = response.data.data;
      },

    function (response) {
      console.log('Error retrieving gifs by keyword');
    });
  };

  vm.favoriteGif = function (url, comment) {
    var gif = { url: url,
                comment: comment,
              };

    favorite.addGifToFavorites(gif)
      .then(function () {
        // ngToast.create({
        //   content: 'Gif added!',
        //   horizontalPosition: 'left',
        //   verticalPosition: 'bottom',
        // });
      });
  };

  /** ---- PRIVATE FUNCTIONS ---- **/
  function getRandom() {
    console.log('random gif button');
    giphy.getRandomGif()
      .then(function (response) {
        console.log('response ', response);
        // add property images to data object
        vm.randomGifURL = response.data.data.image_original_url;
        // {
        //   original: {
        //     url: response.data.data.fixed_height_downsampled_url,
        //   },
        // };

        vm.gifs.unshift(response.data.data);
      },

      function (response) {
        console.log('Error retrieving random gif');
      });
  }
}





// angular.module('giphyApp')
//        .controller('HomeController', HomeController);
//
// function HomeController(giphyService){
//   console.log('HomeController loaded');
//   var ctrl = this;
//
//   ctrl.getRandomGif = function() {
//     console.log('clicked on the button');
//     giphyService.getRandomGif()
//                 .then(function(gif){
//                   ctrl.randomGifURL = gif.image_url;
//                 });
//   };
//
//
//   ctrl.searchForGif = function(searchTerm) {
//     console.log('Got search term from the view:', searchTerm);
//
//     giphyService.search(searchTerm)
//                 .then(function(gifs) {
//                   ctrl.searchedGifs = gifs;
//                 });
//   };
// };
