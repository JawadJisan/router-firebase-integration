import React from 'react';

const Register = () => {
    return (
        <div>
            Please Register Now
            <form>
                <input type='text' placeholder='Your Name'></input>
                <br/>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" placeholder='Enter Your Password' id="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;