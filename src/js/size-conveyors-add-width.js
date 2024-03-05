document
  .getElementById('showSectionButton')
  .addEventListener('click', function () {
    const additionalSection = document.getElementById('additionalSection');
    if (additionalSection.classList.contains('is-hidden')) {
      additionalSection.classList.remove('is-hidden');
    } else {
      additionalSection.classList.add('is-hidden');
    }
  });
