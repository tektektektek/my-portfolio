import React, { Suspense, useEffect } from 'react';

import AOS from 'aos';

// routes
import Routes from './routes/Routes';

// helpers
import { configureFakeBackend } from './helpers';

// Themes
//  For Default import Theme.scss
import './assets/scss/theme.scss';

const App = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    configureFakeBackend();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes />
        </Suspense>
    );
};

export default App;
