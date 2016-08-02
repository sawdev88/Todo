var $todoList = $('.todos'),
    $todoText = $('.todoText'),
    $todoButton = $('.todoButton');


// Add item to list
function addNewTodoItem() {
    var item = $todoText.val()

// Show error is input is empty
    if (item.length >= 1) {
        $todoList.append('<li> ' + item + '</li>');
        $todoText.val('');
    } else {
        $('.validater').fadeIn().delay(500).fadeOut();
    }
}

// Delete item when double clicked
function deleteTodoItem(index) {
  $todoList.on('dblclick', 'li', function() {
      $(this).fadeOut();
  })
}

// Prevent window from reloading when enter is pressed
function preventEnter() {
    $(window).keydown(function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    });
}

//Add a line-through completed todo
function markItemComplete() {
    $todoList.on('click', 'li', function() {
        $(this).toggleClass('completed');
    })
}

//Add item to list when button is clicked
$todoButton.on('click', function() {
    addNewTodoItem();
    console.log(todos);
})

$(document).ready(function() {
    preventEnter();
    markItemComplete();
    deleteTodoItem();
});
