const menuicon =document.getElementById("menu-icon");
const menu =document.getElementById("navbar");

// show and hide menu
menuicon.addEventListener("click", () => {
  if(menu.className === 'navbar'){
      menu.classList.remove('navbar');
  }else{
    menu.classList.add('navbar');

  }
});