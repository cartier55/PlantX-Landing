window.onresize = function(){    
    if (window.innerWidth >= 1024) document.getElementById('navbar-expand-lg').classList.remove("hidden");
}
function toggleNavbar(collapseID) {
    // console.log(document.getElementById(collapseID));
    document.getElementById(collapseID).classList.toggle("hidden");
    document.getElementById(collapseID).classList.toggle("block");
  }