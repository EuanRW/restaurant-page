import { createPage } from "../page-elements/page";
import { createContentDivider } from "../page-elements/content-divider";

const createMainContent = () => {
    const createContent = () => {
        const createParagraphOne = () => {
            const paragraphOne = document.createElement("p");
            paragraphOne.textContent = `
            Slices Pizza was founded in 1986 by a young Italian immigrant named 
            Tony. Growing up in Italy, Tony learned the art of pizza-making from 
            his nonna and brought those traditional techniques with him to America.
            `;
            return paragraphOne;
        };

        const createParagraphTwo = () => {
            const paragraphTwo = document.createElement("p");
            paragraphTwo.textContent = `
            Tony had a passion for creating the perfect slice, and after 
            working in a few local pizzerias, he decided to open his own place. 
            He named it Slices, hoping to bring a little piece of Italy to each 
            customer who walked through the door.
            `;
            return paragraphTwo;
        };

        const createParagraphThree = () => {
            const paragraphThree = document.createElement("p");
            paragraphThree.textContent = `
            Business was slow at first, but word of Tony's delicious pizzas spread 
            quickly. People came from all over to taste his authentic recipes, made 
            with only the freshest ingredients. As the years went by, Slices became 
            a staple in the community and a favorite amongst pizza lovers.
            `;
            return paragraphThree;
        };

        const createParagraphFour = () => {
            const paragraphFour = document.createElement("p");
            paragraphFour.textContent = `
            Tony passed down his pizza-making skills to his children, who now run 
            the restaurant and continue to serve up the same mouth-watering pies 
            that have been satisfying customers for over three decades. To this day, 
            Slices Pizza remains a family-owned and operated business, dedicated to 
            bringing a taste of Italy to every table.
            `;
            return paragraphFour;
        };

        const content = document.createElement("section");
        content.setAttribute("class", "content");
        content.append(
            createParagraphOne(),
            createParagraphTwo(),
            createParagraphThree(),
            createParagraphFour()
        );
        return content;
    };

    const main = document.createElement("main");
    main.append(createContent(), createSocials());
    return main;
};

const createAboutPage = () => {
    const aboutPage = createPage("about");
    aboutPage.appendChild(createMainContent());
    return aboutPage;
};

export {
    createAboutPage
};