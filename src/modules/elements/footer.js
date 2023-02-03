import githubImg from "../../img/github.svg";

const createFooter = () => {
    const createContent = () => {
        const githubIcon = document.createElement("img");
        githubIcon.src = githubImg;
        githubIcon.alt = "Github icon";

        const caption = document.createElement("p");
        caption.textContent = "Euan Williams";

        const content = document.createElement("a");
        content.setAttribute("href", "https://github.com/EuanRW");
        content.setAttribute("target", "_blank");
        content.setAttribute("rel", "noopener noreferrer");
        content.append(caption, githubIcon);
        return content;
    };

    const footer = document.createElement("footer");
    footer.appendChild(createContent());
    return footer;
};

export {
    createFooter
};