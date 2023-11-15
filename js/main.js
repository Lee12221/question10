$(".gnb li").hover(
    function(){
        $(".sub",this).stop().slideDown();
    },
    function(){
        $(".sub",this).stop().slideUp();
    }
);