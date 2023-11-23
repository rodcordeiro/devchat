import { StatusBar } from 'expo-status-bar';
import { ThemeHook } from './hooks/theme';
import { ToastHook } from './hooks/useToast';
import { Navigator } from './navigation';

export default function App() {
  return (
    <ThemeHook>
      <ToastHook>
        <Navigator />
        <StatusBar style="auto" translucent />
      </ToastHook>
    </ThemeHook>
  );
}
