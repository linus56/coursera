var html = document.getElementById("html");
var css = document.getElementById("css");
var js = document.getElementById("js");
var cpp = document.getElementById("c++");
var git = document.getElementById("git");

var skills = document.querySelector('.skills');


html.addEventListener("click", ()=>{
    skills.classList.toggle("html");
    skills.classList.remove("css");
    skills.classList.remove("js");
    skills.classList.remove("cpp");
    skills.classList.remove("git");
    
})
css.addEventListener("click", ()=>{
        skills.classList.toggle("css");
        skills.classList.remove("html");
    skills.classList.remove("js");
    skills.classList.remove("cpp");
    skills.classList.remove("git");
})
js.addEventListener("click", ()=>{
        skills.classList.toggle("js");
        skills.classList.remove("css");
    skills.classList.remove("html");
    skills.classList.remove("cpp");
    skills.classList.remove("git");
})
cpp.addEventListener("click", ()=>{
        skills.classList.toggle("cpp");
        skills.classList.remove("css");
    skills.classList.remove("js");
    skills.classList.remove("html");
    skills.classList.remove("git");
})
git.addEventListener("click", ()=>{
        skills.classList.toggle("git");
        skills.classList.remove("css");
    skills.classList.remove("js");
    skills.classList.remove("cpp");
    skills.classList.remove("html");
})

// var menuBtn = document.querySelector(".menu-btn");
// var body = document.querySelector("body")
// var btnNotClicked = true;

// menuBtn.addEventListener("click",()=>{
//     if(btnNotClicked){
//         body.classList.add("clicked");
//         btnNotClicked = false;
//     }
//     else {
//         body.classList.remove("clicked");
//         btnNotClicked = true;
//     }
// })
