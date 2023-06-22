import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { router } from './router';
import { store } from '@store/createStore';

(() => {
    const root = createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <ReduxProvider store={store}>
                <RouterProvider router={router} />
            </ReduxProvider>
        </React.StrictMode>
    );
})();
