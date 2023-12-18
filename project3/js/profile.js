document.addEventListener('click', function(){
    let a = document.getElementById('click_txt1');
    let b = document.getElementById('txt1');
    let c = document.getElementById('click_txt2');
    let d = document.getElementById('txt2');

    a.addEventListener('click', function(){
        b.style.display = (b.style.display === 'none')? 'block' : 'none';
    })
    c.addEventListener('click', function(){
        d.style.display = (d.style.display === 'none')? 'block' : 'none';
    })
})