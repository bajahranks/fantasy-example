import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import TabOneScreen from "./screens/TabOneScreen";
import { RecoilRoot } from "recoil";

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
          <RecoilRoot>
              <TabOneScreen />
          </RecoilRoot>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default App;