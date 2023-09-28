const toggleButton = document.getElementById('menu');
        const navItems = document.getElementById('nav-items');

        // Add a click event listener to the button
        toggleButton.addEventListener('click', function () {
            // Toggle the "active" and "inactive" classes on the nav-items element
            navItems.classList.toggle('nav-open');
        });