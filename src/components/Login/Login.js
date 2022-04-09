import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{margin:'20px'}}>
            <button onClick={signInWithGoogle}>Google Sign in</button>
            </div>
            <form>
               
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" placeholder='Enter Your Password' id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;