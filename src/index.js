// import your modules
import './css/reset.css'
import './css/style.css';
import './modules/elements/header'
import { createHeader } from './modules/elements/header';
import { createNavMain } from './modules/elements/nav';

const body = document.querySelector("body");
body.append(
    createHeader(),
    createNavMain()
)
