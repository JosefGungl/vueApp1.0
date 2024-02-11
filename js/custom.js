$(document).ready(function () {
    let n= new Date();
    $(".btn-date").html(n.getMonth()+"/"+n.getDay()+"/"+n.getFullYear());

    $(".btn-end-workout").hover(
      function (){
          $(this).removeClass("btn-secondary").addClass("btn-danger");
      }, function (){
          $(this).removeClass('btn-danger').addClass("btn-secondary");
        }
    );

    $(".btn-new-exercise").hover(
        function (){
            $(this).removeClass("btn-secondary").addClass("btn-primary");
        }, function (){
            $(this).removeClass('btn-primary').addClass("btn-secondary");
        }
    );

    $('#workout-rating').on('change', function (e){
       $('.slider-screen').html($(this).val() );
    });


});