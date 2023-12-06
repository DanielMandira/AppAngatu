import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabs from './src/navigators/index';
import Login from './src/login/index';
import Cadastro from './src/cadastro/index';
import Caduser from './src/cadastro/cadastroUser';
import CadEmp from './src/cadastro/cadastroEmpresa';
import BemVindo from './src/login/boasVindas';
const Stack = createStackNavigator();
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={Login}
          options={
            {
              headerTransparent: true,
              title: '',
              headerShown: false,
              presentation:'transparentModal'
            }
          } />
          <Stack.Screen
          name='HomeTabs'
          component={HomeTabs}
          options={
            {
              headerTransparent: true,
              title: '',
              headerShown: false,
              presentation:'transparentModal'
            }
          } />
          <Stack.Screen
          name='Cadastro'
          component={Cadastro}
          options={
            {
              headerTransparent: true,
              title: '',
              headerShown: false,
              presentation:'transparentModal',
            }
          } />
          <Stack.Screen 
          name='Caduser'
          component={Caduser}
          options={
            {
              headerTransparent: true,
              title: '',
              headerShown: true,
              presentation:'transparentModal',
            }
          }
          />
           <Stack.Screen 
          name='CadEmp'
          component={CadEmp}
          options={
            {
              headerTransparent: true,
              title: '',
              headerShown: true,
              presentation:'transparentModal',
            }
          }
          />
           <Stack.Screen 
          name='BemVindo'
          component={BemVindo}
          options={
            {
              headerTransparent: true,
              title: '',
              headerShown: false,
              presentation:'transparentModal',
            }
          }
          />
          
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;