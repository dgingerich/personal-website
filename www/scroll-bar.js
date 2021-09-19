function setActiveNavLink() {

    //Active link is underlined by adding element to nav-link_active class
    //This section removes any active links (there should only be one) every time this runs
    //Better than setting textDecoration = 'none' because that also removes text decoration on :hover and :focus
    let currentActiveLink = document.getElementsByClassName('nav-link_active');
    if (currentActiveLink[0]) currentActiveLink[0].classList.remove('nav-link_active')

    let anchors = document.getElementsByClassName('anchor');
    let i;
    //Gets first anchor that appears on client screen
    for (i = 0; i < anchors.length; i++) {
        let anchor = anchors[i];
        if (anchor.getBoundingClientRect().top > 1) {
            break;
        }
    }

    //If the last anchor on the page begins before the page starts,
    //this will set the last anchor as the active anchor
    if (!(i < anchors.length)) {
        i--;
    }

    //The first anchor onscreen will have a getBoundingClientRect().top value of <= 0 and the following will have a value
    // > 1. If first onscreen anchor distance from the top is < 50% of page height, it leaves that anchor as active 
    if (anchors[i].getBoundingClientRect().top > window.innerHeight / 2.5) i--;

    if (i >= 0) {
        //navLink variable is navLink HTML class string based on anchor name
        let navLink = document.getElementsByClassName(`${anchors[i].getAttribute('id')}-link`)[0];
        navLink.classList.add('nav-link_active');
    }
}

function setNavOnClick(link, id) {

    Array.from(document.getElementsByClassName(link)).forEach(element => {
        element.addEventListener('click', () => {
            anchor = document.getElementById(id);
            anchor.scrollIntoView();
        })
    });

}

document.addEventListener('DOMContentLoaded', () => {
    
    setNavOnClick('home-link', 'home')
    setNavOnClick('portfolio-link', 'portfolio')
    setNavOnClick('about-link', 'about')
    setNavOnClick('contact-link', 'contact')

    setActiveNavLink(); //Sets initial active nav link on load of page
    window.addEventListener('scroll', () => setActiveNavLink()); //Sets active nav link when scrolling

})