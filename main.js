document.querySelector(".article__header").textContent = "Welcome Justina!";

const targetSelector = document.querySelectorAll(".article_header")
for (let i = 0; i < targetSelector.length; i++) {
  targetSelector[i].classList.add("important");
}


const removeClass = document.querySelectorAll(".aside_box--dark");
for ( i = 0; i < removeClass.length; i++) {
  removeClass[i].classList.remove("dashed"); 
}


const addClass = document.querySelectorAll(".article__footer");
for ( i = 0; i < addClass.length; i++) {
 addClass[i].classList.add("goldenrod"); 
}

