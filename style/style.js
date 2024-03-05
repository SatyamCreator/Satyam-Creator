// show hide
document.addEventListener('DOMContentLoaded', function () {
            var btn = document.getElementById('toggleBtn');
            var content = document.getElementById('hiddenContent');

            // Initial state
            var isHidden = true;

            // Toggle function
            function toggleContent() {
                if (isHidden) {
                    // content.style.display = 'none';
                    content.style.transition = 'all 0.2s ease';
                   
                    content.className = 'col-sm-2 d-lg-none d-block';
                } else {
                    // content.style.display = 'block';
                    content.style.transition = 'all 0.2s ease';
                    content.className = 'col-sm-2 d-lg-block d-none';
                }

                // Update state
                isHidden = !isHidden;
            }

            // Add click event listener to the button
            btn.addEventListener('click', toggleContent);

// ========================================================================


let navbarlinks = document.querySelectorAll('.navbar .scrollto');

function navbarlinksActive() {
  navbarlinks.forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    let position = window.scrollY;
    if (navbarlink.hash != '.') position += 200;

    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('active');
    } else {
      navbarlink.classList.remove('active');
    }
  })
}
window.addEventListener('load', navbarlinksActive);
document.addEventListener('scroll', navbarlinksActive);

/**
 * Function to scroll to an element with top ofset
 */
function scrollto(el) {
  const selectHeader = document.querySelector('#header');
  let offset = 0;

  if (selectHeader.classList.contains('sticked')) {
    offset = document.querySelector('#header.sticked').offsetHeight;
  } else if (selectHeader.hasAttribute('data-scrollto-offset')) {
    offset = selectHeader.offsetHeight - parseInt(selectHeader.getAttribute('data-scrollto-offset'));
  }
  window.scrollTo({
    top: document.querySelector(el).offsetTop - offset,
    behavior: 'smooth'
  });
}





        });



        
 