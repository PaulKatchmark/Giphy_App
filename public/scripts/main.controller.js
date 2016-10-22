angular.module('giphyApp')
       .controller('HomeController', HomeController);

function HomeController(giphyService){
  console.log('HomeController loaded');
  var ctrl = this;

  ctrl.getRandomGif = function() {
    console.log('clicked on the button');
    giphyService.getRandomGif()
                .then(function(gif){
                  ctrl.randomGifURL = gif.image_url;
                });
  };


  ctrl.searchForGif = function(searchTerm) {
    console.log('Got search term from the view:', searchTerm);

    giphyService.search(searchTerm)
                .then(function(gifs) {
                  ctrl.searchedGifs = gifs;
                });
  };
};
