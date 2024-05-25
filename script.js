// script.js

// Function to toggle the search box visibility
function toggleSearchBox() {
    var searchBox = document.getElementById('searchBox');
    searchBox.style.display = (searchBox.style.display === 'none' || searchBox.style.display === '') ? 'block' : 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    var menuLinks = document.querySelectorAll('.menu-link');

    menuLinks.forEach(function (menuLink) {
        menuLink.addEventListener('click', function (event) {
            event.preventDefault();

            menuLinks.forEach(function (link) {
                link.classList.remove('active');
            });

            menuLink.classList.add('active');

            var targetSectionId = menuLink.getAttribute('data-target');
            var targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Function to handle active menu links on scroll
    window.addEventListener('scroll', function () {
        var fromTop = window.scrollY;

        menuLinks.forEach(function (link) {
            var targetSectionId = link.getAttribute('data-target');
            var section = document.getElementById(targetSectionId);

            if (
                section.offsetTop <= fromTop + 50 &&
                section.offsetTop + section.offsetHeight > fromTop + 50
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});
