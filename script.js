document.addEventListener('DOMContentLoaded', function () {
    

    const toggleButtons = document.querySelectorAll('.menu');
    const navItems = document.querySelector('#nav-items');

        

        toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            navItems.classList.toggle('nav-open');
        });
    });

});