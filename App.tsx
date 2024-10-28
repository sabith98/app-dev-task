import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {CreateScreen} from './src/screens';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <CreateScreen />
    </GluestackUIProvider>
  );
}

export default App;
