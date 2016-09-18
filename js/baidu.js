/**
 * Created by 谢康炎 on 2016/8/6.
 */
$(function(){
    var telreg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    var passreg=/\s/;
    $("#textid").on("focus",function(){
        $("#telprompt").show(100)
    })
    $("#textid").blur(function(){
        if($(this).val().length==0){
            $("#telprompt").hide(100);
        }
        if(telreg.test($(this).val())){
            $("#telprompt").css("color","green").html("输入正确！");
        }else{
            $("#telprompt").css("color","red").html("输入错误！");
        }
    })
    $("#passid").on("focus",function(){
        $(".passti").show(100)
    });
    $("#passid").blur(function(){
        if($(this).val().length==0){
            $(".passti").hide(100)
        }
    })
    $("#passid").on("keyup",function(){
        if(6<=$(this).val().length&&$(this).val().length<=14){
            $("#passlength").css("color","green")
        }else{
            $("#passlength").css("color","red")
        }
        if(passreg.test($(this).val())){
            $("#passS").css("color","red")
        }else{
            $("#passS").css("color","green")
        }
    })
    $("#checktest").on("click",function(){
        if($(this).prop('checked')){
            $(".btn").css("backgroundColor","#4d74ff");
            $(".btn")[0].disabled=false;
        }else{
            $(".btn").css("backgroundColor","gray");
            $(".btn")[0].disabled=true;
        }
    })
    $(".btn").on("click",function(){
        $.ajax({
            url:"",
            type:"get",
            data:$("")
        })
    })







})









