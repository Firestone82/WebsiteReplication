function toggleNavbar() {
    const nav = document.querySelector('.navbar-nav');

    const navClasses = nav.classList;

    if (navClasses.contains("navbar--open")) {
        navClasses.remove("navbar--open")
        navClasses.add("navbar--closed")
    } else {
        navClasses.add("navbar--open")
        navClasses.remove("navbar--closed")
    }
}

