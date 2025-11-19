let grow = 0;
let btn = document.querySelector('button');
var h2 = document.querySelector('h2');
var inner = document.querySelector('.inner');

btn.addEventListener('click', function(){
    btn.style.pointerEvents = 'none';

    var num = 50 + Math.floor(Math.random()*50);

    let hey = setInterval(() => {
       grow++;
       h2.innerHTML = grow + '%';
       inner.style.width = grow + '%'; 
    }, num);

    setTimeout(() => {
        clearInterval(hey);
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = 0.5;
    }, num*100);
})