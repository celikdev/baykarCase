import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {getData, setData} from './src/utils/AuthHandler';
import {HomeStack, AuthStack} from './src/stacks';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    getData('isAuth').then(res => {
      res === 'true' ? setIsAuth(true) : setIsAuth(false);
    });
  }, []);

  return (
    <NavigationContainer>
      {isAuth ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
