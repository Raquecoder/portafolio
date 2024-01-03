const openBtn = document.getElementById("open-btn");
//console.log(openBtn)
const closeBtn = document.getElementById('close-btn');
//console.log (closeBtn)
const navList = document.getElementById('nav__list');
//console.log(navList)

openBtn.addEventListener('click',function(){
    navList.style.display = 'block';
    openBtn.style.display = 'none';
})

closeBtn.addEventListener('click',function(){
    navList.style.display = 'none';
    openBtn.style.display = 'block';
})