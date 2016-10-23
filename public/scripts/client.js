$(function() {

    getFavorites();

    $('#favPage').on('click', getFavorites);
    $('.newFav').on('click', addFavorite); //function that targets a button to add a task
    // $('#toDoList').on('click', '.delete', deleteTask); //function that targets a button to delete a task
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
        $form.append('<li value="' + favgiphy.id + '">' + '<img src="' + favgiphy.gif_url + '">' + favgiphy.user_comment + '</li>');

        var $deleteButton = $('<button class="delete">Delete</button>');
        $deleteButton.data('id', favgiphy.id);
        $form.append($deleteButton);

        $form.data('id', favgiphy.id);
        $li.append($form);
        $list.append($li);

    });
}

function addFavorite(event) { //function to add a new task to the DOM
    event.preventDefault();
    var favData = $(this).serialize(); //this will allow us to send appropriate data to the database for our request

    


    $.ajax({
        type: 'POST',
        url: '/favorite',
        data: favData,
        success: getFavorites
    });
    $(this).find('input').val('');
}

// function deleteTask(event) {  //function for deleteing a task
//     event.preventDefault();
//
//     var taskId = $(this).data('id'); // this will allow us to send appropriate ID to the database so that it can be deleted
//     if (confirm("Good call! This wasn't really worth your time, but are you sure?")) { //HARD MODE: this makes the client confirm they want to delete a task before it is removed
//         $.ajax({
//             type: 'DELETE',
//             url: '/todo/' + taskId,
//             data: taskId,
//             success: getTasks
//         });
//     }
// }

// function updateTask() { // function that allows user to check the checkbox and mark a task as complete
//     var $checkbox = $(this);
//     var data = $checkbox.data('id'); //targeting the appropriate ID so that we can send the correct info to our PUT request on the router
//     var boxToggle = $checkbox.prop('checked'); //this will target the property of the 'p' tag so that we cross off the correct task, or un-cross off.
//
//     $.ajax({
//         type: 'PUT',
//         url: '/todo/' + data,
//         data: boxToggle,
//         success: getTasks
//     });
// };
