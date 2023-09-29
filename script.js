const toggleButtons = document.querySelectorAll('.menu');
        const navItems = document.querySelector('#nav-items');

        // Add a click event listener to the button
        for(var i = 0; i < toggleButtons.length; i++) 
        toggleButtons[i].addEventListener("click", function() {
            // Toggle the "active" and "inactive" classes on the nav-items element
            navItems.classList.toggle('nav-open');
        });