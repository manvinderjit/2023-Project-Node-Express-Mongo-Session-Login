import Router from 'express';
const indexRouter  = new Router();
import {
    redirectToLogin,
    redirectToDashboard,
} from '../middleware/AuthenticateMw.js';
import { loginEmployee, logoutEmployee } from '../controllers/authenticateController.js';

indexRouter.get('/', redirectToLogin, (req, res) => {
    res.render('dashboard', {
        title: 'Dashboard',
        username: res.locals.user,
    });
});

indexRouter.get('/login', redirectToDashboard, (req, res) => {
    res.render('login', {
        title: 'Login',
        username: '',
        error: '',
    });
});

indexRouter.post('/login', redirectToDashboard, loginEmployee);

indexRouter.get('/register', redirectToDashboard, (req, res) => {
    res.render('register', {
        title: 'Registration Page',
        username: '',
        error: '',
    });
});

indexRouter.post('/logout', redirectToLogin, logoutEmployee);

export default indexRouter;