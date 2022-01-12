import { profileTemplate } from "./profileTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _bookService = undefined;

function initialize(router, renderHandler, bookService) {
    _router = router;
    _renderHandler = renderHandler;
    _bookService = bookService;
}

async function getView(context) {
    let user = context.user;
    let myBooks = [];
    if(user !== undefined){
        myBooks = await _bookService.getMyBook(user._id);
    }
console.log(user._id);
    let model = {
        book: myBooks,
        user
    }

    let templateResult = profileTemplate(model);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize
}