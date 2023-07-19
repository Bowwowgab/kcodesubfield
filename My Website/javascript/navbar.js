// For the header of all html to load the navigational bar 
document.addEventListener('DOMContentLoaded', ()=>{
    fetch('/html_doc/navbar.html')
    .then((respon)=>{
        return respon.text();
    })

    .then((html)=>{
        document.getElementById('nav-bar-div').innerHTML = html;
    })

    .catch((error)=>{
        console.error('Error fetching nav bar', error);
    })
});


// For the mobile view menu
function open_mobile_view_menu(){
    let open =  document.querySelector('#view-mobile-menu-list');
    (open.style.height === '350px') ? open.style.height ='0' : open.style.height = '350px';
}























// window.addEventListener('scroll', ()=>{
//     let nav = document.getElementById('nav-container-div');
//     if(window.scrollY > 299 && window.innerWidth >= 900){
//         nav.style.backgroundColor = 'black';
//     }else if(window.scrollY < 298 && window.innerWidth > 900){
//         nav.style.backgroundColor = 'transparent'; 
//     }else{
//         nav.style.backgroundColor = 'black';
//     }
        
// });

