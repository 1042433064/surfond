/**
 * Created by 谢康炎 on 2016/9/17.
 */
$(function(){
    $(".login").on("click",function(){
        $.ajax({
            url:'../js/userinfo.json',
            type:'get',
            data:$('.Form').serialize(),
            success:function(data){err(data)},
            beforeSend:function(){}
        });
    });
    function err(data){
       for(var i=0; i<data.length;i++){
           if(data[i].email==$('.text').val()&&data[i].pass==$('.passw').val()){
               $('.Value').html('登录成功');
               setTimeout(function(){
                   window.location.href='https://www.baidu.com/'
               },1000);
               break;
           }else{
               $('.Value').html('用户或密码错误！');
           }
       }
    };
});







