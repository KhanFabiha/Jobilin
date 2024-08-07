function openNav() {
  document.getElementById("header").style.marginLeft = "250px";
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("slideshow").style.marginLeft = "250px";
  document.getElementById("pageFooter").style.marginLeft = "250px";

  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("header").style.marginLeft = "0";
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("slideshow").style.marginLeft= "0";
  document.getElementById("pageFooter").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

