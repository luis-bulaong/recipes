import RecipesController from '../controllers/recipesController';

export default class Route
{
    constructor(app, express) {
        this.app = app;
        this.recipesController = new RecipesController();

        this.init();
    }

    init() {
        this.listen();
    }

    listen() {
        this.app.get('/', (request, result) => {
            this.recipesController.index(request, result);
        });

        this.app.get('/view/:id', (request, result) => {
            this.recipesController.index(request, result);
        });

        this.app.get('/add', (request, result) => {
            this.recipesController.index(request, result);
        });
    }
}
