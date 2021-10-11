import React, { createContext } from 'react';
import useFriebase from '../hooks/useFriebase';


export const AuthContext = createContext();


const AuthProvider = (props) => {
    const {children} = props;
    const allContexts = useFriebase();
    return (
        <AuthContext.Provider value = {allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;