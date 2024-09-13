const menuicon =document.getElementById("menu-icon");
const menu =document.getElementById("navbar");

// use eventlistener (click listener)..click korle nav bar show krbe
menuicon.addEventListener("click", () => {
  if(menu.className === 'navbar'){
      menu.classList.remove('navbar');
  }else{
    menu.classList.add('navbar');

  }
});