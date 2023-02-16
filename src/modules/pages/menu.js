import { createPage } from "../functions/createPage";

const createMainContent = () => {
    const createMenu = () => {
        const createDish = (meal, itemNum) => {
            const createDishName = () => {
                const dishName = document.createElement("h4");
                if (meal === "mains") {
                    if (itemNum === "one") dishName.textContent = "Margherita 9";
                    if (itemNum === "two") dishName.textContent = "Marinara 7";
                    if (itemNum === "three") dishName.textContent = "Calzone 14";
                    if (itemNum === "four") dishName.textContent = "Napolenta 10";
                }
                if (meal === "sides") {
                    if (itemNum === "one") dishName.textContent = "Garlic Focaccia 7";
                    if (itemNum === "two") dishName.textContent = "Mozzarella Sticks 6";
                    if (itemNum === "three") dishName.textContent = "Wings With Blue Cheese Dip 18";
                    if (itemNum === "four") dishName.textContent = "Caesar Salad 14";
                }
                return dishName;
            };
            
            const createDishInfo = () => {
                const dishInfo = document.createElement("p");
                dishInfo.textContent = `
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto eligendi saepe repellat nostrum quis corrupti.
                `;
                return dishInfo;
            };
                
            const dish = document.createElement("article");
            dish.setAttribute("class", `dish ${itemNum}`);
            dish.append(createDishName(), createDishInfo());
            return dish;
        };

        const createMenuItems = (meal) => {
            const menuItems = document.createElement("div");
            menuItems.setAttribute("class", "menu-items");
            menuItems.append(
                createDish(meal, "one"),
                createDish(meal, "two"),
                createDish(meal, "three"),
                createDish(meal, "four")
            );
            return menuItems;
        };

        const createMealTitle = (meal) => {
            const mealTitle = document.createElement("h3");
            mealTitle.textContent = meal === "mains" ? "Mains" : "Sides";
            return mealTitle;
        };

        const createMealArticle = (meal) => {
            const article = document.createElement("article");
            article.setAttribute("class", `${meal}`);
            article.append(
                createMealTitle(meal),
                createMenuItems(meal)
            );
            return article;
        };

        const menu = document.createElement("section");
        menu.setAttribute("class", "menu");
        menu.append(
            createMealArticle("mains"),
            createMealArticle("sides")
        );
        return menu;
    };

    const main = document.createElement("main");
    main.append(createMenu());
    return main;
};

const createMenuPage = () => {
    const menuPage = createPage("menu");
    menuPage.appendChild(createMainContent());
    return menuPage;
};

export {
    createMenuPage
};