import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import { router } from './routes/routes';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
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
