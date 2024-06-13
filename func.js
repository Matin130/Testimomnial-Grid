document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
  
    readMoreButtons.forEach(button => {
      button.addEventListener('click', () => {
        const quote = button.previousElementSibling;
        const shortText = quote.querySelector('.short-text');
        const fullText = quote.querySelector('.full-text');
  
        if (fullText.style.display === 'none' || fullText.style.display === '') {
          fullText.style.display = 'inline';
          shortText.style.display = 'none';
          button.textContent = 'Read Less';
        } else {
          fullText.style.display = 'none';
          shortText.style.display = 'inline';
          button.textContent = 'Read More';
        }
      });
    });
  });