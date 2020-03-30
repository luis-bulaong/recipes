import path from 'path';

export default class RecipesController
{
    constructor() {
        
    }

    index(request, result) {
        result.sendFile(path.join(`${__dirname}/views/index.html`));
    }
}
