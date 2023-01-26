const createPage = (pageName) => {
    const page = document.createElement("div");
    page.setAttribute("id", `${pageName}-page`);
    
    const content = document.body;
    content.appendChild(page);
    return page;
};

export {
    createPage
};