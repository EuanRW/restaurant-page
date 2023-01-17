import { createPage } from "../functions/createpage";
import pizzaImg from "../../img/pizza.jpg";

const createMainContent = () => {
  const createOverlay = () => {
    const overlay = document.createElement("div");
    overlay.setAttribute("class", "overlay");
    return overlay;
  };

  const createImg = () => {
    const img = document.createElement("img");
    img.setAttribute("class", "backgroundImg");
    img.src = pizzaImg;
    img.alt = "Photo of margherita pizza in a pizza oven.";

    return img;
  };

  const createContent = () => {
    const createWelcome = () => {
      const welcome = document.createElement("h1");
      welcome.textContent = "Slices";
      return welcome;
    };

    const createQuote = () => {
      const slogan = document.createElement("p");
      slogan.textContent = "Where more is better.";
      const subSlogan = document.createElement("p");
      subSlogan.textContent = "Serving mornings right since 1962.";
      const quote = document.createElement("blockquote");
      quote.append(slogan, subSlogan);
      return quote;
    };

    const createBtn = () => {
      const btn = document.createElement("button");
      btn.setAttribute("type", "button");
      btn.textContent = "Book a table";
      return btn;
    };

    const content = document.createElement("div");
    content.setAttribute("class", "content");
    content.append(createWelcome(), createQuote(), createBtn());
    return content;
  };

  const createNavDot = (index) => {
    const dot = document.createElement("span");
    dot.setAttribute("data-index", `${index}`);
    return dot;
  };

  const main = document.createElement("main");
  main.append(
    createOverlay(),
    createImg(),
    createContent()
  );
  return main;
};

const createHomePage = () => {
  const homePage = createPage("home");
  homePage.appendChild(createMainContent());
  return homePage;
};

export { createHomePage };
