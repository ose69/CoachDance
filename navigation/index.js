import React from 'react';
import Routes from './Routes';
import AuthProviders, { AuthProvider } from './AuthProviders';

const Providers = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default Providers;