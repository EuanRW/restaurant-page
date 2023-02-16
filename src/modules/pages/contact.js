import { createPage } from "../functions/createPage";

const createMainContent = () => {
    const createContent = () => {
        const createDescription = () => {
            const text = document.createElement("p");
            text.textContent = "We'd love to hear from you!";
            const textBreak = document.createElement("br");
            const action = document.createElement("p");
            action.textContent = `
                Please fill out the form below,
                and we'll be in touch with you soon.
            `;
            const description = document.createElement("div");
            description.setAttribute("class", "description");
            description.append(text, textBreak, action);
            return description;
        };

        const createForm = () => {
            const capitalizeWord = (str) => str.charAt(0).toUpperCase() + str.slice(1);

            const createLabel = (data) => {
                const label = document.createElement("label");
                label.setAttribute("for", `user_${data}`);
                label.textContent = `${capitalizeWord(data)}*`;
                // label.appendChild(asterisk);
                return label;
            };

            const createInput = (data) => {
                if (data === "name") {
                    const input = document.createElement("input");
                    input.setAttribute("type", "text");
                    input.setAttribute("id", `user_${data}`);
                    input.setAttribute("name", `user_${data}`);
                    input.setAttribute("maxlength", "30");
                    input.setAttribute(
                        "title",
                        "Please enter a valid name (must only contain letters or numbers)."
                    );
                    input.setAttribute("required", "");
                    return input;
                }
                if (data === "email") {
                    const input = document.createElement("input");
                    input.setAttribute("type", "email");
                    input.setAttribute("id", `user_${data}`);
                    input.setAttribute("name", `user_${data}`);
                    input.setAttribute(
                        "title",
                        "Please enter a valid email address."
                    );
                    input.setAttribute("required", "");
                    return input;
                }
                if (data === "message") {
                    const input = document.createElement("textarea");
                    input.setAttribute("id", `user_${data}`);
                    input.setAttribute("name", `user_${data}`);
                    input.setAttribute("cols", "20");
                    input.setAttribute("rows", "5");
                    input.setAttribute(
                        "title",
                        "Please enter your message here."
                    );
                    input.setAttribute("required", "");
                    return input;
                }
            };

            const createField = (data) => {
                const field = document.createElement("div");
                field.setAttribute("class", "field");
                field.append(createLabel(data), createInput(data));
                return field;
            };

            const createSubmitBtn = () => {
                const btn = document.createElement("button");
                btn.setAttribute("type", "submit");
                btn.setAttribute("class", "button-52")
                btn.textContent = "Submit";
                return btn;
            };

            const form = document.createElement("form");
            form.setAttribute("action", "");
            form.setAttribute("method", "");
            form.append(
                createField("name"),
                createField("email"),
                createField("message"),
                createSubmitBtn()
            );
            return form;
        };

        const content = document.createElement("section");
        content.setAttribute("class", "content");
        content.append(
            createDescription(),
            createForm()
        );
        return content;
    };

    const main = document.createElement("main");
    main.append(createContent());
    return main;
};

const createContactPage = () => {
    const contactPage = createPage("contact");
    contactPage.appendChild(createMainContent());
    return contactPage;
};

export {
    createContactPage
};