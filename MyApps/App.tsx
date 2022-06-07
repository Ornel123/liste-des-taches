/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';


// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from 'native-base';
const App = () =>{
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}
export default App;

