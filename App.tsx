import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from 'components/AppNavigator';
import { SearchProvider } from 'context/searchContext';
import { ThemeProvider } from 'theme/ThemeProvider';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <SearchProvider>
          <AppNavigator />
        </SearchProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
