


//check off
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//delete
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function() {
    $(this).remove()
  });
  event.stopPropagation();
});

//imput
$("input[type='text']").keypress(function(event){
  if (event.which ===13) {
    var toDoText = $(this).val();
    $(this).val("");
    $("ul").prepend("<li><span><i class='fas fa-trash-alt'></i></span> " + toDoText + "</li");
  }
});

$(".fa-plus-square").click(function(){
  $("input[type = 'text']").fadeToggle();
});
