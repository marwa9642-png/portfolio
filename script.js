let btn=document.getElementById('scr');
window.onscroll=function(){
    if(window.scrollY >= 400){
     btn.style.display='flex';
    }
    else{
   btn.style.display='none';
    }
}
if(btn){
    btn.onclick=function(){
     window.scrollTo({
            top:0,
            behavior:'smooth',
        });
}}
 

// let input=document.getElementsByClassName('name');
// let mes=document.getElementsByClassName('mes');

// function validate(){
//     let valid=true;
//     for(let i=0;i<input.length;i++){
//         mes[i].innerHTML='';
//         if(input[i].value.trim()==''){
//             mes[i].innerHTML=`${input[i].name} is required`;
//             valid=false;
//         }
//         else if(input[i].value.trim().split(/\s+/).length<3 && i==0){
//             mes[i].innerHTML=`${input[i].name} must contain 3 words`;
//              valid=false;
//         }
//         else if(!input[i].value.includes("@gmail.com")&& i==1){
//                mes[i].innerHTML=`${input[i].name} must contain @gmail.com`;
//                  valid=false;
//         }
//         else if(input[i].value.trim().split(/\s+/).length<=100 && i==2){
//              mes[i].innerHTML=`${input[i].name} must contain at least 10 words`;
//                 valid=false;
//         }
//  if(!valid===true){
//     alert("message is submitted");
//  }
//     }
// }


let input = document.getElementsByClassName('name');
let mes = document.getElementsByClassName('message');


document.querySelector('.contact-form').addEventListener('submit', function(e) {
    let valid = true;

    for (let i = 0; i < input.length; i++) {
        mes[i].innerHTML = '';
        let value = input[i].value.trim();

        if (value === '') {
            mes[i].innerHTML = `${input[i].name} is required`;
            valid = false;
        }
        else if (i === 0 && value.split(/\s+/).length < 3) {
            mes[i].innerHTML = `${input[i].name} must contain at least 3 words`;
            valid = false;
        }
        else if (i === 1 && !value.includes("@gmail.com")) {
            mes[i].innerHTML = `${input[i].name} must contain @gmail.com`;
            valid = false;
        }     

        else if (i === 2) {
            let wordsCount = value.split(/\s+/).length;
            if (wordsCount < 10 || wordsCount > 100) {
                mes[i].innerHTML = `${input[i].name} must contain between 10 and 100 words`;
                valid = false;
            }
        }
    }

    if (!valid) {
        e.preventDefault();
    } else {
        alert("message is submitted");
    }
});
// 1. Hamburger Menu Toggle Logic (قائمة الموبايل)
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');
const menuIcon = document.getElementById('menu-icon');

if (hamburgerBtn && navLinks && menuIcon) {
    hamburgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('#nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        });
    });
}

// 2. Dark / Light Mode Toggle Logic (إصلاح زر القمر والشمس ليعمل فوراً وعند الـ Refresh)
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (themeToggleBtn && themeIcon) {
    // التحقق من الوضع المحفوظ مسبقاً عند فتح أو تحديث الصفحة (Refresh)
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.className = 'fa-solid fa-sun'; // عرض الشمس في اللايت مود
    } else {
        document.body.classList.remove('light-mode');
        themeIcon.className = 'fa-solid fa-moon'; // عرض القمر في الدارك مود
    }

    // الحدث عند الضغط على الزر
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            themeIcon.className = 'fa-solid fa-sun';
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.className = 'fa-solid fa-moon';
            localStorage.setItem('theme', 'dark');
        }
    });
}
