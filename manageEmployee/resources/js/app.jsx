import React from 'react';
import './bootstrap';
import '../css/app.css';
import '../css/auth.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { InertiaProgress } from '@inertiajs/progress';


const loadingElement = document.getElementById('loading');
if (loadingElement) {
    loadingElement.remove();
}


createInertiaApp({
    title: (title) => `${title} - ManageEmployee`,
    resolve: (name) => {
        console.log('Resolving page:', name);
        return import(`./Pages/${name}.jsx`);
    },
    setup({ el, App, props }) {
        console.log('Setting up Inertia app with props:', props);
        const root = createRoot(el);
        root.render(
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>
        );
    },
}).catch(error => {
    console.error('Inertia initialization error:', error);
});

// Initialize progress bar
InertiaProgress.init({ color: '#4B5563' }); 