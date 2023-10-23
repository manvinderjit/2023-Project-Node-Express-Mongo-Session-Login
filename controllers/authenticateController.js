const loginEmployee = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (email == 'email@abc.com' && password == 'password') {
            req.session.userId = email;
            req.session.authorized = true;
            res.redirect('/');
        } else {
            res.render('login', {
                title: 'Login',
                email: req.body.email,
                error: 'Error: Check email and/or password',
            });
        }
    } catch (error) {
        console.error(error);
    }
};

const registerEmployee = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        

        if (email && password) {
            // TODO: Check if user exists in the database
            // TODO: Register user in database if doesn't exist
            // TODO: Redired to '/register', Send error message : "User already exists"
        }
    } catch (error) {
        console.error(error);
    }
};

const logoutEmployee = async (req, res, next) => {
    req.session.destroy((error) => {
        if (error) {
            return res.redirect('/');
        }
        res.clearCookie(process.env.SID);
        res.redirect('/login');
    });
};

export { loginEmployee, logoutEmployee };
