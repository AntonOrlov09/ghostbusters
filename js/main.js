$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  mMenuBtn.on("click", function() {
    console/log("Вы нажали на кнопку меню");
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });
});    