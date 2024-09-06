import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>

      <Toaster
        richColors={true}
        // toastOptions={{
        //   style: {
        //     background: 'red',
        //   },
        //   className: 'class',
        // }}
      />
    </Provider>
  </StrictMode>
);
