document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.querySelector('.next-btn');
    const step1 = document.querySelector('.step1');
    const step2 = document.querySelector('.step2');

    nextBtn.addEventListener('click', () => {
        step1.classList.remove('active');
        step2.classList.add('active');
    });
});