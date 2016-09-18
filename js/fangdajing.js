$(function(event){
    var small=$(".smalldiv");
    var div=$(".div");
    $(".div").mouseenter(function(){
       $(".showdiv").css("display","inline-block");
    });
    $(".div").mouseleave(function(){
       $(".showdiv").hide();
    });

    $(".div").mousemove(function() {
        var event = event || window.event;
        var pagex = event.pageX;
        var pagey = event.pageY;
        var boxw=div.height();
        var boxh=div.width();
        var smallw=small[0].offsetWidth;
        var smallh=small[0].offsetHeight;
        var smallx = pagex - $(".div")[0].offsetLeft-smallw/2;
        var smally = pagey - $(".div")[0].offsetTop-smallh/2;
        if(smallx<0){
            smallx=0;
        };
        if(smally<0){
            smally=0;
        };
        if(smallx>boxw-smallw){
            smallx=boxw-smallw;
        };
        if(smally>boxh-smallh){
            smally=boxh-smallh;
        };
        small.css({left:smallx,top:smally});
        console.log(smallx)
        console.log(smally)
        var a=smallx/smallw*500
        var b=smally/smallh*500
        $("#img").css({left:-a,top:-b});
    })
})