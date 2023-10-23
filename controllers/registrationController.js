import Employee from "../models/employees.js";
import bcrypt from 'bcrypt';

const registerEmployee = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        //TODO: Validate email and password

        if (!email || !password) {
            res.render('register', {
                title: 'Registration Page',
                email: email,
                error: 'Error: Please provide all fields.',
            });
        } else {
            // Check if user exists
            const employeeExists = await Employee.findOne({ email }).exec();

            if (employeeExists) {
                res.render('register', {
                    title: 'Registration Page',
                    email: email,
                    error: 'An account with the email already exists.',
                });
            } else {
                // Hash password
                const hashedPassword = await bcrypt.hashSync(password, 10);

                // Create employee
                const employee = await Employee.create({
                    email,
                    password: hashedPassword,
                });

                if (employee) {
                    res.render('register', {
                        title: 'Registration Page',
                        email: '',
                        error: '',
                        success: `Employee account with ${email} create successfully!`,
                    });
                } else {
                    res.render('register', {
                        title: 'Registration Page',
                        email: email,
                        error: 'User creation failed',
                    });
                }
            }
        }
    } catch (error) {
        res.render('register', {
            title: 'Registration Page',
            email: req.body.email,
            error: error,
        });
    }
};

export { registerEmployee };
