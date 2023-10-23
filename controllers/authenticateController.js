const loginEmployee = async (req, res, next) => {

    try {      
        const { username, password } = req.body;

        if (
            username == 'admin' &&
            password == 'password'
        ) {
            req.session.userId = username;                
            req.session.authorized = true;            
            res.redirect('/');
        } else {
            res.render('login', {
                title: 'Login',
                username: req.body.username,
                error: 'Error: Check username and/or password',
            });                
        };       
        
    } catch (error) {
        console.error(error);
    }  
};

const registerEmployee = async (req, res, next) => {

    try {
        const { email, password } = req.body;
        //TODO: Validate username and password

        if(email && password){

            // TODO: Check if user exists in the database

            // TODO: Register user in database if doesn't exist

            // TODO: Redired to '/register', Send error message : "User already exists"
        }

    } catch (error) {
        console.error(error);
    }
}

const logoutEmployee = async (req, res, next) => {
    req.session.destroy(error => {
        if(error){
            return res.redirect('/');
        }
        res.clearCookie(process.env.SID);
        res.redirect('/login');
    });
}

export { loginEmployee, logoutEmployee };
