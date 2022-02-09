function slideOut() {
  const navList = document.getElementsByClassName('navList');

  let i;
  if ( i = 0, i <navList.length, i++) {
    navList.style.display = block;
  }
}
  const navBar = document.getElementsByClassName('navBar');
  navBar.addEventListener('click', slideOut);
