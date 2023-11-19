function toggleNavbar() {
    const nav = document.querySelector('.navbar-nav');

    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}