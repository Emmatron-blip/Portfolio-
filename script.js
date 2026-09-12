/* ================================
   PORTFOLIO JAVASCRIPT
================================ */


/* ================================
   MOBILE NAVIGATION
================================ */

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");


if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        navigation.classList.toggle("open");

        const menuIsOpen =
            navigation.classList.contains("open");

        menuToggle.setAttribute(
            "aria-expanded",
            menuIsOpen
        );

    });

}


/* ================================
   CLOSE MENU WHEN LINK IS CLICKED
================================ */

const navigationLinks =
    document.querySelectorAll(".navigation a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navigation) {
            navigation.classList.remove("open");
        }

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });

});


/* ================================
   SCROLL REVEAL ANIMATION
================================ */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* ================================
   CURSOR LIGHT EFFECT
================================ */

const cursorGlow =
    document.querySelector(".cursor-glow");


if (cursorGlow) {

    window.addEventListener(
        "pointermove",
        function (event) {

            cursorGlow.style.left =
                event.clientX + "px";

            cursorGlow.style.top =
                event.clientY + "px";

        }
    );

}


/* ================================
   CURRENT YEAR
================================ */

const copyright =
    document.querySelector("#copyright");


if (copyright) {

    const currentYear =
        new Date().getFullYear();

    copyright.textContent =
        `© ${currentYear} Your Name`;

}