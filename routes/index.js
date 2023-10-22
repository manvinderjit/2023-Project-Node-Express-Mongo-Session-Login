import Router from 'express';
const indexRouter  = new Router();

indexRouter.get('/', (req, res) => {
    res.send("Index Dashboard Page!");    
});

indexRouter.get('/login', (req, res) => {
    res.send('Login Page!');
});

indexRouter.get('/register', (req, res) => {
    res.send('Register Page!');
});

export default indexRouter;
