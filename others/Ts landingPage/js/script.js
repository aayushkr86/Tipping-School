$(document).ready(function() {
    $("#dataScience").click(function() {
        $("#info").children().hide();
        $("#dataScienceInfo").show();
    });

    $("#fullStackDeveloper").click(function() {
        $("#info").children().hide();
        $("#fullStackDeveloperInfo").show();
    });

    $("#angularBootcamp").click(function() {
        $("#info").children().hide();
        $("#angularBootcampInfo").show();
    });

    $("#reactRedux").click(function() {
        $("#info").children().hide();
        $("#reactReduxInfo").show();
    });

    $("#myCarousel").carousel({interval: 900, wrap: true});
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });

     $("#myExperience").carousel({interval: 5000, wrap: true});
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myExperience").carousel(0);
    });
    $(".item2").click(function(){
        $("#myExperience").carousel(1);
    });
    $(".item3").click(function(){
        $("#myExperience").carousel(2);
    });
    $(".item4").click(function(){
        $("#myExperience").carousel(3);
    });
});