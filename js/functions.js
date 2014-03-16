$( ".circle" ).hover(
 function() {
   $( this ).find("h3").hide();
   $( this ).find("p").css("display", "table-cell");
 }, function() {
   $( this ).find("p").hide();
   $( this ).find("h3").css("display", "inline-block");
 }
);

$( ".checkbox" ).click(function() {
   $( this ).toggleClass("active");
});