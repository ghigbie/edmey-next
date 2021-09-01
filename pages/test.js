import React from 'react'
import Header from '../components/Header';
import Spinner from '../components/Spinner';

const login = () => {
    return (
        <>
            <Header title={'Login'}/>
            <Spinner/>
        </>
    );
}

export default login