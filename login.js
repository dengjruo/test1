//var a = 111;
//console.log(a);

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if(scrollTop>=3300&&scrollTop<=4300){

        $("#rocket1").addClass("rocket1_take_off");
        $("#rocket2").addClass("rocket2_take_off");
        $("#rocket3").addClass("rocket3_take_off");
    } else if(scrollTop<3300){
        $("#rocket1").removeClass("rocket1_take_off");
        $("#rocket2").removeClass("rocket2_take_off");
        $("#rocket3").removeClass("rocket3_take_off");
    }
    console.log(scrollTop);
    if(scrollTop>=3800&&scrollTop<=5100){

        $(".container7_list").addClass("container7_list_hide_show");
    } else if(scrollTop<3800){
        $(".container7_list").removeClass("container7_list_hide_show");
    }

    if(scrollTop>=1400&&scrollTop<=1600){

        $(".speed").addClass("speed_scale");
    } else if(scrollTop<1400){
        $(".speed").removeClass("speed_scale");
    }


    if(scrollTop>=900&&scrollTop<=1400){

        $("#mengban1").addClass("mengban1");
        $("#mengban2").addClass("mengban2");
        $("#mengban3").addClass("mengban3");
        $("#mengban3").addClass("li3");
        $("#mengban4").addClass("mengban4");
        $("#mengban5").addClass("mengban5");

    } else if(scrollTop<900){
        $("#mengban1").removeClass("mengban1");
        $("#mengban2").removeClass("mengban2");
        $("#mengban3").removeClass("mengban3");
        $("#mengban3").removeClass("li3");
        $("#mengban3").addClass("li3_bak");
        $("#mengban4").removeClass("mengban4");
        $("#mengban5").removeClass("mengban5");

    }

})












