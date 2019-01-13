$(document).ready(function(){
    //activate carousel
    $("#myCarousel").carousel({interval:1000,pause:"hover",wrap:"true"});
    //indicators
    $("item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $("item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $("item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $("item4").click(function(){
        $("#myCarousel").carousel(3);
    });
    //corousel controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });

 
  $("#contact").click(function(){
        $("#form").slideToggle("slow");
    });

   $(".flip").flip({
       trigger: 'hover'
   });


 var flag=true;
     $('a[href^="#"]').on('click',function(e){
         e.preventDefault();
         var target=this.hash;
         var $target=$(target);
         $('html,body').stop().animate({
             'scrollTop':$target.offset().top -0
            },"slow","swing",function(){
                window.location.hash=target;
            
         });
    });

 //$("#top").click(function() {
  //$("html,body").animate({ scrollTop: "0px" }, 3000);
 //});





 var $window = $(window);
 $window.on('scroll', check_if_in_view);

  function check_if_in_view(){
    var window_height=$window.height();
    var window_top_position=$window.scrollTop();
    var window_bottom_position=(window_top_position + window_height);

    
        var $element=$(".articleleft");
        var element_height=$element.outerHeight();
        var element_top_position=$element.offset().top;
        var element_bottom_position=(element_top_position + element_height);

        if((element_bottom_position>=window_top_position)
                           &&
         (element_top_position<=window_bottom_position))
         {
            
             $(".articleleft").animate({left:"0px"},2000);
        }

        var $element=$(".articleright");
        var element_height=$element.outerHeight();
        var element_top_position=$element.offset().top;
        var element_bottom_position=(element_top_position + element_height);

        if((element_bottom_position>=window_top_position)
                           &&
         (element_top_position<=window_bottom_position))
         {
            
             $(".articleright").animate({left:"0px"},2000);
        }

    }
 });
