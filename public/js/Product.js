window.onload = function(){
    let lastMovementsTitle = document.querySelector('#lastMovementsTitle')
    let lastMovementsDown = document.querySelector('#lastMovementsDown')
    let lastMovementsDown2 = document.querySelector('#lastMovementsDown2')

 
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

}