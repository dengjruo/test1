//var a = 111;
//console.log(a);

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if(scrollTop>=3300&&scrollTop<=4300){

        $("#rocket1").addClass("rocket1_take_off");
    } else if(scrollTop<3300){
        $("#rocket1").removeClass("rocket1_take_off");
    }
    console.log(scrollTop);
    if(scrollTop>=3800&&scrollTop<=5100){

        $(".container7_list").addClass("container7_list_hide_show");
    } else if(scrollTop<3800){
        $(".container7_list").removeClass("container7_list_hide_show");
    }


})