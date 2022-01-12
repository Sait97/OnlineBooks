import { editTemplate } from "./editTemplate.js";

let _router = undefined;
let _renderHandler = undefined;
let _bookService = undefined;
let _form = undefined;

function initialize(router, renderHandler, bookService) {
    _router = router;
    _renderHandler = renderHandler;
    _bookService = bookService;
}

async function submitHandler(id, e){
    e.preventDefault();
    try{
        let formData = new FormData(e.target);
        _form.errorMessages = [];
       
        let title = formData.get('title');
        if(title.trim() === ''){
            _form.errorMessages.push('Title is required');
        }
        let description = formData.get('description');
        if(description.trim() === ''){
            _form.errorMessages.push('Description is required');
        }
        let imageUrl = formData.get('imageUrl');
        if(imageUrl.trim() === ''){
            _form.errorMessages.push('Image Url is required');
        }
        let type = formData.get('type');
        if(type.trim() === ''){
            _form.errorMessages.push('Type is required');
        }
        if(_form.errorMessages.length > 0){
            let templateResult = createTemplate(_form);
            alert(_form.errorMessages.join('\n'));
            return _renderHandler(templateResult);
        }
        

        let book = {
            title,
            description,
            imageUrl,
            type
        }
       
        let loginResult = await _bookService.update(book, id);
        
        _router.redirect(`/details/${id}`);
    } catch (err){
        alert(err);
    }
   
}

async function getView(context) {
    let id = context.params.id;
    let book = await _bookService.get(id);
    
    

    _form = {
        submitHandler,
        errorMessages: [],
        book
    }
    
    let templateResult = editTemplate(_form);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize
}