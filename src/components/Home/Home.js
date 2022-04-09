import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase()
    return (
        <div>
            <h2>This is Home</h2>

            <p>Currrent user : {user ? user.displayName : 'No User Found'} </p>
            
        </div>
    );
};

export default Home;