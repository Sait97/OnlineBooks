import authService from "./services/authService.js";
import page from './node_modules/page/page.mjs';
import { LitRenderer } from "./rendering/litRenderer.js";

import nav from "./pages/nav/nav.js";
import loginPage from "./pages/login/loginPage.js";
import registerPage from "./pages/register/registerPage.js";
import createPage from "./pages/create/createPage.js";
import bookService from "./services/bookService.js";
import dashboardPage from "./pages/dashboard/dashboardPage.js";
import detailsPage from "./pages/details/detailsPage.js";
import editPage from "./pages/edit/editPage.js";
import profilePage from "./pages/profile/profilePage.js";


let navEl = document.getElementById('site-header');
let appEl = document.getElementById('site-content');

let renderer = new LitRenderer();

let navRenderHandler = renderer.createRenderHandler(navEl);
let appRenderHandler = renderer.createRenderHandler(appEl);

nav.initialize(page, navRenderHandler, authService);
loginPage.initialize(page, appRenderHandler, authService);
registerPage.initialize(page, appRenderHandler, authService);
createPage.initialize(page, appRenderHandler, bookService);
dashboardPage.initialize(page, appRenderHandler, bookService);
detailsPage.initialize(page, appRenderHandler, bookService);
editPage.initialize(page, appRenderHandler, bookService);
profilePage.initialize(page, appRenderHandler, bookService);

page('/index.html', '/dashboard');
page('/', '/dashboard');


page(decorateContectUser);
page(nav.getView);

page('/login', loginPage.getView);
page('/register', registerPage.getView)
page('/dashboard', dashboardPage.getView)
page('/add-book', createPage.getView);
page('/details/:id', detailsPage.getView);
page('/edit/:id', editPage.getView);
page('/profile', profilePage.getView)

page.start();

function decorateContectUser(context, next){
    let user = authService.getUser();
    context.user = user;
    next();
}