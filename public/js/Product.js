window.onload = function(){
    let lastMovementsTitle = document.querySelector('#lastMovementsTitle')
    let lastMovementsDown = document.querySelector('#lastMovementsDown')
    let lastMovementsDown2 = document.querySelector('#lastMovementsDown2')
    let headerScroll = document.querySelector('#header-scroll')

 
    lastMovementsTitle.addEventListener('click', function (e) {
        lastMovementsInfo.classList.toggle('mostrar');
    });
    
    lastMovementsTitle.addEventListener('click', function (e) {
        lastMovementsTitle.classList.toggle('prueba');
    });

    lastMovementsTitle.addEventListener('click', function (e) {
        lastMovementsDown.classList.toggle('rotate');
    });

    lastMovementsTitle.addEventListener('click', function (e) {
        lastMovementsDown2.classList.toggle('rotate');
    });

    window.addEventListener("scroll", () => {
          if (window.pageYOffset > 140) {
            headerScroll.classList.add("scroll-show")
          }
          if (window.pageYOffset < 140) {
            headerScroll.classList.remove("scroll-show")
          }
      })

 }