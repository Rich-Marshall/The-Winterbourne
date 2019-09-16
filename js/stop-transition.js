stopResponsiveTransition();

function stopResponsiveTransition() {
  const classes = document.body.classList;
  let timer = null;
  window.addEventListener('resize', function () {
    if (timer){
      clearTimeout(timer);
      timer = null;
    }else {
      classes.add('stop-transition');
    }
    timer = setTimeout(() => {
      classes.remove('stop-transition');
      timer = null;
    }, 100);
  });
}
