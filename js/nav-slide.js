const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navIn = document.querySelector('.nav-links');
  const navOut = document.querySelector('.nav-active');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click',()=>{
      //toggle the menu
      navIn.classList.toggle('nav-active');

      //animate the list of links
      navLinks.forEach((link, index)=>{
        if (link.style.animation) {
          link.style.animation = ''
        } else {
          link.style.animation = `navLinkFadeIn 1s ease forwards ${index / 7 + 0.1}s`

        }
      });
      //burger cross animation
      burger.classList.toggle('toggle');

  });


}

navSlide();
