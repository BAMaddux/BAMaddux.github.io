

$("#aboutMe").click(function(){
    $(".myWriting").fadeOut(400);

    $(".aboutMe").fadeIn(1000);
});

$("#myCoding").click(function(){
    $(".aboutMe").fadeOut(400);
    $(".myWriting").fadeOut(400);

});

$("#myWriting").click(function(){
    $(".aboutMe").fadeOut(400);
    
    $(".myWriting").fadeIn(1000);    
});

$("#contactMe").click(function(){
    $(".aboutMe").fadeOut(400);
    $(".myWriting").fadeOut(400);

});

$("#labRatCover").click(function(){
    $("#labRatCover").hide();
    $("#aboutLabRat").show();
})

$("#aboutLabRat").click(function(){
    $("#aboutLabRat").hide();
    $("#labRatCover").show();
})


