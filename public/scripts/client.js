$(function() {

    getFavorites();

    $('#favPage').on('click', getFavorites);
    $('#newFav').on('click', '.addition', addFavorite); //function that targets a button to add a task
    $('#favGifs').on('click', '.delete', deleteGif); //function that targets a button to delete a task
    // $("#toDoList").on("click", '#complete', updateTask); //function that targets a button to complete a task
});

function getFavorites() { //get request to the router.
    $.ajax({
        type: 'GET',
        url: '/favorite',
        success: displayFavorites
    });
}

function displayFavorites(response) {
  console.log(response);
    var $list = $('#favGifs');
    $list.empty();
    response.forEach(function(favgiphy) {

        var $li = $('<ul></ul>');
        var $form = $('<form></form>');
        $form.append('<li value="' + favgiphy.id + '">' + '<img src="' + favgiphy.gif_url + '">' + '</br>' + favgiphy.user_comment + '</li>');

        var $deleteButton = $('<button class="delete" type="submit">Delete</button>');
        $deleteButton.data('id', favgiphy.id);
        $form.append($deleteButton);

        $form.data('id', favgiphy.id);
        $li.append($form);
        $list.append($li);

        var gifCount = response.length;
        $('#count').text(gifCount);

    });
}

function addFavorite(event) { //function to add a new task to the DOM
    event.preventDefault();
    var gifArray = {};
    // var favData = $(this).serialize(); //this will allow us to send appropriate data to the database for our request
    var favData = $(this).data('id');

    var textData = $('.input').val();

    gifArray = {
      gif_url: favData,
      user_comment: textData
    };

    console.log(gifArray);

    $.ajax({
        type: 'POST',
        url: '/favorite',
        data: gifArray,
        success: getFavorites
    });
}

function deleteGif(event) {  //function for deleteing a task
    event.preventDefault();
console.log('button clicked');
    var gifId = $(this).data('id'); // this will allow us to send appropriate ID to the database so that it can be deleted
    console.log(gifId);
        $.ajax({
            type: 'DELETE',
            url: '/favorite/' + gifId,
            data: gifId,
            success: getFavorites
        });
    // }
}

// function updateGif() {

//     $.ajax({
//         type: 'PUT',
//         url: '//' + data,
//         data:
//         success: getFavorites
//     });
// };
