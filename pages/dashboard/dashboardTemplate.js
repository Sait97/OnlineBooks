import { html } from "../../node_modules/lit-html/lit-html.js";


export let dashboardTemplate = (books) => html`<section id="dashboard-page" class="dashboard">
<h1>Dashboard</h1>
<ul class="other-books-list">
${books.length > 0
? books.map(b => bookTemplate(b))
: html`<p class="no-books">No books in database!</p>` }
</ul>
</section>`;

let bookTemplate = (book) => html`<li class="otherBooks">
<h3>${book.title}</h3>
<p>Type: ${book.type}</p>
<p class="img"><img src="${book.imageUrl}"></p>
<a class="button" href="/details/${book._id}">Details</a>
</li>
`