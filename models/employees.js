import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'An email is required!'],
            unique: true,
            lowercase: true,
            trim: true,
            minLength: [5, 'Email must be atleast 5 characters long'],
            validate:{
                validator: function(email) {
                    const emailRegex = /[a-z0-9._\-]{2,}@[a-z0-9._\-]{2,}.[a-z0-9]{2,4}/;
                    return emailRegex.test(email);
                }, message: props => `${props.value} is not a valid email address!`
            }
        },
        password: {
            type: String,
            required: [true, 'A password is required!'],
            unique: true,
            trim: true,
            minLength: [5, 'Password must be atleast 5 characters long'],
        },
    },
    {
        timestamps: true,
    },
);

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
