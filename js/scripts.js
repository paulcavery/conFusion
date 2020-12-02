$(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
               $("#carouselButton").click(function(){
                if ($("#carousel-button-icon").hasClass("fa-pause")) {
                    $("#mycarousel").carousel("pause");
                    $("#carousel-button-icon").removeClass("fa-pause");
                    $("#carousel-button-icon").addClass("fa-play");
                }
                else if ($("#carousel-button-icon").hasClass("fa-play")){
                    $("#mycarousel").carousel("cycle");
                    $("#carousel-button-icon").removeClass("fa-play");
                    $("#carousel-button-icon").addClass("fa-pause");                  
                }
            });

            $("#loginModalButton").click(function(){
              $("#loginModal").modal("toggle");
            });

            $("#close1").click(function(){
              $("#loginModal").modal("hide");
            });

            $("#reserveButton").click(function(){
              $("#reserveModal").modal("toggle");
            });

            $("#close2").click(function(){
              $("#reserveModal").modal("hide");
            });

            $("#cancelButton").click(function(){
              $("#reserveModal").modal("hide");
            });
          
        });