$(document).ready(function(){

  console.log('..loading')
   var addListItem= require("./functions")
  var listItems =[];

  $('form').on('submit', function(event){
    event.preventDefault();
    var item_value = $('#list_item_input').val();
    var item_obj = {item_value: item_value, completed: false}
    $('#list_item_input').val('');
    addListItem(item_obj,listItems);

  })


/////////////////////////////////////////////




//////////////////////////////////////////////////////////////////


});


