let header = document.querySelector('#top')
document.addEventListener('scroll', function() {
  if (window.pageYOffset > 50) {
    header.classList.add('fixed_block')
  }
  else {
    header.classList.remove('fixed_block')
  }
});
