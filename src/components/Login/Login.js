import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
    // const {signInWithGoogle} = useFirebase();

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIni = () =>{
        signInWithGoogle()
        .then(()=>{
            navigate(from, { replace: true })
        })
    }

    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: '20px' }}>
             {/* <button onClick={signInWithGoogle}>Google Sign in</button> */}
                

            <button onClick={handleGoogleSignIni}>Google Sign in</button>

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