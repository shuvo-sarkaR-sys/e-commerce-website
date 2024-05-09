const hamBurger = document.getElementById("hamburger");
const navbar = document.getElementById("sub-nav1");
const ofLose = document.getElementById("close");
  if(hamBurger){
    hamBurger.addEventListener('click', () => {
        navbar.classList.add('active')
    })
  }
  if(ofLose){
    ofLose.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
  }
  // store js
  const mainImg = document.getElementById("mainImage");
  const smallImg = document.getElementsByClassName("small-img");
  smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
  }
  smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
  }
  smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
  }
  smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
  }