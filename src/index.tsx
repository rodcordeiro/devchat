import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeHook } from './hooks/theme';
import { ToastHook } from './hooks/useToast';
import { Navigator } from './navigation';
import { persistedStore, store } from './redux/store.redux';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <ThemeHook>
          <ToastHook>
            <Navigator />
            <StatusBar style="auto" translucent />
          </ToastHook>
        </ThemeHook>
      </PersistGate>
    </Provider>
  );
}
