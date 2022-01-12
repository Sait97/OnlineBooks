import { html } from "../../node_modules/lit-html/lit-html.js";


export let navTemplate = (nav) => html` <nav class="navbar">
<section class="navbar-dashboard">
    <a href="/">Dashboard</a>
    ${nav.isLoggedIn
    ? loggedView(nav)
    : guestView() }`;

    let guestView = () => html`
    <div id="guest">
        <a class="button" href="/login">Login</a>
        <a class="button" href="/register">Register</a>
    </div>`;
    let loggedView = (nav) => html`
    <div id="user">
        <span>Welcome, ${nav.email}</span>
        <a class="button" href="/profile">My Books</a>
        <a class="button" href="/add-book">Add Book</a>
        <a class="button" href="javascript:void(0)" @click=${nav.logoutHandler}>Logout</a>
    </div>
</section>
</nav>`;