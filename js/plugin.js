$(document).ready(function(){
   $(".navLink").click(function(){
       console.log($("#about").attr("id"));
       
       $("html,body").animate({
           scrollTop: $(`#${$(this).attr('name')}`).offset().top - 100
       },1000)
   })
   
       /* navbar changing  */ 
       $(window).scroll( function(){
 
        if($(this).scrollTop() >20){
            $(".menu").css({"background-color":"#333" , "color" :"#eee"})
             $(".welcome button").css({ "color" :"#434343"}) ; 
                $(".brand").attr("src","images/brandg.png")
        }
        else{
            $(".navbar").css("background-color","transparent") ; 
            $(".welcome button").css({ "color" :"#fff"})
            $(".brand").attr("src","images/brandw.png")
        }
        }
        )

})