

const hamburgerMenu = document.getElementsByClassName ("hamburger-menu") [0];
const openMenu = document.getElementById("open-menu");
//rendi block "hamburger menu"
openMenu.addEventListener("click", function()
{
   hamburgerMenu.style = "display: block";
}
);
//chiudi menu 
const closenMenu = document.getElementById("close-menu");
closenMenu.addEventListener("click", function()
{
   hamburgerMenu.style = "display: none";
}
);
