
const openclose = document.querySelectorAll('.openclosebtn');
openclose.forEach(x =>{ x.addEventListener('click', ()=>{
    document.querySelector('#mobile-view-menus').classList.toggle('mobile-veiw-menustyle');});
});

window.addEventListener('resize', ()=>{
    if(window.innerWidth > 901){
        document.querySelector('#mobile-view-menus').classList.remove('mobile-veiw-menustyle');
    }
})


window.addEventListener('scroll', () =>{
    (window.scrollY > 100 && window.innerWidth >= 1023)? document.querySelector('header').classList.add('header-style'): document.querySelector('header').classList.remove('header-style');
})

