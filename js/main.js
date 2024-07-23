$(function(){
    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(".sub").stop().slideUp();
    })

    // var n = 0;

    // setInterval(function(){

    //     if(n == 2){
    //         n = 0;
    //     }else{
    //         n++;
    //     }

    //     $(".left_move").animate({left : n * (-800) + "px"},500);

    // },2500)

    setInterval(function(){
        $(".left_move").animate({left : "-800px"},500,function(){
            $(".left_move").append($(".left_move li").eq(0));
            $(".left_move").css({left : "0"})
        })
    },2500)


    $(".p_click").click(function(){
        $(".pop").show();
    })
    $(".close").click(function(){
        $(".pop").hide();
    })

})