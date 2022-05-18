import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,Dimensions,FlatList, } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Beauty from "./components/Beauty";
import Discover from "./components/Discover";



// export default function App() {
//   return (
//     <View style={styles.container} >
//       <Discover/>
//     </View>
//   );
//  }




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

const Stack= createNativeStackNavigator();

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Beauty">
        <Stack.Screen name="Beauty" component={Beauty} />
        <Stack.Screen name="Discover" component={Discover} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
