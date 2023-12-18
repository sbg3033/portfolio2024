    document.addEventListener('DOMContentLoaded', function(){
        let a = document.getElementById('pe');
        let b = document.getElementById('y');
        let c = document.getElementById('z');
        let d = document.getElementById('peyz');
        setInterval(function(){
            a.style.opacity = (a.style.opacity == '0')? '1' : '0';
            b.style.opacity = (b.style.opacity == '0')? '1' : '0';
            c.style.opacity = (c.style.opacity == '0')? '1' : '0';
            d.style.opacity = (d.style.opacity == '0')? '1' : '0';
        }, 2000)
    })