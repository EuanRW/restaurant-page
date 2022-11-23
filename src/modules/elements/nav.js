import logoImg from "../../img/sliceLogo.png"

const createNavMain = () => {
    const createHome = () => {
        const homeLink = document.createElement("a");
        homeLink.setAttribute("href", "#");
        homeLink.textContent = "Home";

        const homeUnderline = document.createElement("div");
        homeUnderline.setAttribute("class", "underline");

        const home = document.createElement("li");
        home.setAttribute("class", "home");
        home.append(homeLink, homeUnderline);
        return home;
    };
    
    const createAbout = () => {
        const aboutLink = document.createElement("a");
        aboutLink.setAttribute("href", "#");
        aboutLink.textContent = "About";

        const aboutUnderline = document.createElement("div");
        aboutUnderline.setAttribute("class", "underline");
        const about = document.createElement("li");

        about.setAttribute("class", "about");
        about.append(aboutLink, aboutUnderline);
        return about;
    };

    const createLogo = () => {
        const logoIcon = document.createElement("img");
        logoIcon.src = logoImg;
        logoIcon.alt = "Pancakes vector art";

        const logoLink = document.createElement("a");
        logoLink.setAttribute("href", "#");
        logoLink.appendChild(logoIcon);

        const logo = document.createElement("li");
        logo.setAttribute("class", "logo");
        logo.appendChild(logoLink);
        return logo;
    };

    const createMenu = () => {
        const menuLink = document.createElement("a");
        menuLink.setAttribute("href", "#");
        menuLink.textContent = "Menu";

        const menuUnderline = document.createElement("div");
        menuUnderline.setAttribute("class", "underline");
        const menu = document.createElement("li");

        menu.setAttribute("class", "menu");
        menu.append(menuLink, menuUnderline);
        return menu;
    };

    const createContact = () => {
        const contactLink = document.createElement("a");
        contactLink.setAttribute("href", "#");
        contactLink.textContent = "Contact";

        const contactUnderline = document.createElement("div");
        contactUnderline.setAttribute("class", "underline");
        const contact = document.createElement("li");
        
        contact.setAttribute("class", "contact");
        contact.append(contactLink, contactUnderline);
        return contact;
    };

    const createLinks = () => {
        const links = document.createElement("ul");
        links.append(
            createHome(),
            createAbout(),
            createLogo(),
            createMenu(),
            createContact()
        );
        return links;
    };

    const nav = document.createElement("nav");
    nav.setAttribute("class", "nav-main");
    nav.appendChild(createLinks());
    return nav;
};

export {
    createNavMain
};