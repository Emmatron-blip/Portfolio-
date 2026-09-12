/* ================================
   MOBILE NAVIGATION
================================ */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        navigation.classList.toggle("active");
        menuToggle.classList.toggle("active");

        const menuIsOpen =
            navigation.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            menuIsOpen ? "true" : "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            menuIsOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* Close menu when a link is clicked */

    const navigationLinks =
        navigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}
