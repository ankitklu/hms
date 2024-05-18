import React from 'react';
import { useDispatch } from 'react-redux';

const Trial = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'login' });
        console.log('Login button clicked');
    };

    return (
        <div>
            <button onClick={handleClick}>Login</button>
            <h1>This is the login page</h1>
        </div>
    );
};

export default Trial;
