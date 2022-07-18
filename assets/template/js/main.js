document
  .getElementById("sideMenuBtn")
  .addEventListener("click", sideMenuBtnClickHandle);

function sideMenuBtnClickHandle(e) {
  document.getElementById("pageSideMenu").style.left = "0";
}

document
  .getElementById("closedMenuBtn")
  .addEventListener("click", closedMenuBtnClickHandle);

function closedMenuBtnClickHandle(e) {
  document.getElementById("pageSideMenu").style.left = "-100%";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
}
