import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "./src/Screens/Index";
import { MoviePage } from "./src/Screens/MoviePage";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"App"} component={Index} />
        <Stack.Screen name={"MoviePage"} component={MoviePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
