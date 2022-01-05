let navbarLinks = document.querySelectorAll("nav a");

// CCOMPLETE THE LISTENER AND .ACTIVE CLASSNAME ADDER FUCTION

window.addEventListener("scroll", e => {

  navbarLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (scrollPos + 150 > section.offsetTop && scrollPos + 150 < section.offsetTop + section.offsetHeight ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});