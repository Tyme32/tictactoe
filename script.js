var rows = 16;
var columns = 16;
var $row;
var $square;

$(document).ready(function() {
	for(var i=0; i < rows; i++) {
  	$row = $("<div />", {class: 'row'});
    $("#grid").append($row);
  }
  for(var i = 0; i < columns; i++) {
  	$square = $("<div />", {class: 'square'});
    $(".row").append($square);
  }

  $('.square').mouseenter(function(){
  	$(this).addClass("etched")
  });
});