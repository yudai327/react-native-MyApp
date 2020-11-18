import React,{useContext} from 'react';
import {createStackNavigator, StackCardInterpolationProps} from '@react-navigation/stack';

import {INITIAL, LOADING, HOME, CHOOSE_LOGIN} from '../../constants/path';
import {Initial, Loading, Home, ChooseLogin} from '../../components/pages';
import * as UiContext from '../../contexts/ui';

const Stack = createStackNavigator();
const forFade = ({current}: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function switchingAuthStatus(status: UiContext.Status) {
  switch (status) {
    case UiContext.Status.UN_AUTHORIZED:
      return <Stack.Screen name={CHOOSE_LOGIN} component={ChooseLogin} />;
    case UiContext.Status.AUTHORIZED:
      return <Stack.Screen name={HOME} component={Home} />;
    case UiContext.Status.FIRST_OPEN:
    default:
      return <Stack.Screen name={INITIAL} component={Initial} />;
  }
}
const AuthWithRoutes = () => {
  const uiContext = useContext(UiContext.Context);
  console.log(uiContext);
  return (
    <Stack.Navigator
      initialRouteName={LOADING}
      headerMode="none"
      screenOptions={{cardStyleInterpolator: forFade}}>
      {uiContext.applicationState !== UiContext.Status.LOADING ? (
        switchingAuthStatus(uiContext.applicationState)
      ) : (
        <Stack.Screen name={LOADING} component={Loading} />
      )}
    </Stack.Navigator>
  );
};
export default AuthWithRoutes;
