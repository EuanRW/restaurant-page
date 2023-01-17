const createPage = (pageName) => {
    const page = document.createElement("div");
    page.setAttribute("id", `${pageName}-page`);
    
    const content = document.querySelector("#content");
    content.appendChild(page);
    return page;
};

export {
    createPage
};