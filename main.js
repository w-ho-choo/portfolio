window.onload = function () {
  const load = document.getElementById('loading');

  load.classList.remove('on');

  // 네비게이션

  const sections = document.querySelectorAll('.each-sc');
  const navLinks = document.querySelectorAll('.side-nav-inner > li');

  let currentActiveSectionIndex = 0;

  const browserBottom = window.scrollY + window.innerHeight;

  window.addEventListener('scroll', () => {

    sections.forEach((a, i) => {
      const top = a.getBoundingClientRect().top;

      if (top < (browserBottom - 150)) {
        currentActiveSectionIndex = i;
      }
    });

    navLinks.forEach((a) => {
      a.classList.remove('on');
    });

    navLinks[currentActiveSectionIndex].classList.add('on');
  });
}