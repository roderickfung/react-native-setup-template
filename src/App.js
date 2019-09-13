import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';

import Button from '@components/Button';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button>
          <Text>This is a button</Text>
        </Button>
      </SafeAreaView>
    </>
  );
};

export default App;
