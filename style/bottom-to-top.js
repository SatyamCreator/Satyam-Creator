const scrollToTopButton = document.getElementById('scroll-to-top');

scrollToTopButton.addEventListener('click', () => {
  document.getElementsByClassName('scroll')[0].scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



  const scrollToTopElement = document.getElementById('scroll-to-top');

  document.getElementsByClassName('scroll')[0].addEventListener('scroll', () => {
    if (document.getElementsByClassName('scroll')[0].scrollTop > 90 || document.documentElement.scrollTop > 90) {
      scrollToTopElement.style.display = 'block';
      scrollToTopElement.addClassName('back-top-show');
      
      // alert('hi');
    } else {
      scrollToTopElement.style.display = 'none';
      scrollToTopElement.removeClassName('back-top-show');
      // alert('no');
    }
  });
