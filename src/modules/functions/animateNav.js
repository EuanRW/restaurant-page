const animateNavMain = () => {
    let activeLink = document.querySelector(".nav-main .home a");

    const makeActive = (link) => {
        const activeUnderline = activeLink.nextElementSibling;
        activeUnderline.style.display = "none";
        const underline = link.nextElementSibling;
        underline.style.display = "flex";
    };

    const links = document.querySelectorAll(".nav-main a");
    for (const link of links) {
        link.addEventListener("click", () => {
            if (link !== activeLink && !link.parentElement.classList.contains("logo")) {
                makeActive(link);
                activeLink = link;
            } else {
                location.reload();
            }
        });
    }
};

export {
    animateNavMain
};