import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// Tailwind css
import './tailwind.css';

// i18n (needs to be bundled)
import './i18n';

// Router
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store/index';
import { AuthProvider } from './providers/auth-context';
import Routers from './routers';
import './index.css';
import './main.scss';

import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Suspense>
            <AuthProvider>
                <Provider store={store}>
                    <BrowserRouter>
                        <ToastContainer />
                        <Routers />
                    </BrowserRouter>
                </Provider>
            </AuthProvider>
        </Suspense>
    </React.StrictMode>
);
