// import your modules
import './css/reset.css'
import './css/style.css';
import './modules/elements/header'
import { createHeader } from './modules/elements/header';
import { createNavMain } from './modules/elements/nav';
import { createFooter } from './modules/elements/footer';
import { createHomePage } from './modules/pages/home';

const content = document.querySelector("#content");
content.append(
    createHeader(),
    createNavMain(),
    createHomePage(),
    createFooter() 
)
