/*// Check off specific todos by clicking
$("li").click(function(){
    //$(this).css("color","gray")
    //$(this).css("text-decoration","line-through")
    if ($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css("color","black");
    }else{
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    $(this).css({
            color: "gray",
            textDecoration: "line-through"
    });
});
*/
// Above code is replaced by below single line code...
// by adding class completed in css...
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});
// tackling the span part...
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove(); // this refers to li not the span...
    });
    event.stopPropagation();
});
// Creating Todo's...
$("input[type='text']").keypress(function(event){
    if (event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});

