function revealMenu() {
    let menu = document.getElementById("navbarSupportedContent");
    const navClass =  document.querySelector('.nav-background');
    const containerClass =  document.querySelector('.con-list');
    
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
      navClass.classList.remove('navbar', 'navbar-expand-sm', 'navbar-light');
      containerClass.classList.remove('d-flex', 'justify-content-between');
    }
  }