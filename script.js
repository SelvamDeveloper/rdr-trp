        var menuList=document.getElementById("menulist");
        menuList.style.maxHeight="0px";
        function togglemenu(){
                if(menuList.style.maxHeight =="0px")
                    {
                    menuList.style.maxHeight="450px";
                    }
                else
                    {
                        menuList.style.maxHeight="0px";
                    }

        }

        var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
            },
            loop:true,
            pagination: {
                el: ".swiper-pagination",
              },
          });




          
          function alert(){
            window.alert("announcement will update soon")
          }

          
