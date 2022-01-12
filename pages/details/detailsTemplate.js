import { html } from "../../node_modules/lit-html/lit-html.js";


export let detailsTemplate = (model) => html`<section id="details-page" class="details">
<div class="book-information">
    <h3>${model.book.title}</h3>
    <p class="type">Type: ${model.book.type}</p>
    <p class="img"><img src="${model.book.imageUrl}"></p>
    <div class="actions">
    ${model.isOwner 
    ? html`
        <a class="button" href="/edit/${model.book._id}">Edit</a>
        <a class="button" href="javascript:void(0)" @click=${(e) => model.deleteHandler(model.book._id, e)}>Delete</a>
        <div class="likes">
            <img class="hearts" src="/images/heart.png">
            <span id="total-likes">Likes: 0</span>
        </div>`
    : html`<div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>` }
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${model.book.description}</p>
    </div>
</section>`;
//  <a class="button" href="/">Like</a>