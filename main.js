const menuicon =document.getElementById("menu-icon");
const menu =document.getElementById("nav-menu");

// use eventlistener (click listener)..click korle nav bar show krbe
menuicon.addEventListener("click", () => {
  if(menu.className === 'hidden'){
      menu.classList.remove('hidden');
  }else{
    menu.classList.add('hidden');

  }
});