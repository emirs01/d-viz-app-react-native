import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import BindScreen from '../screens/BindScreen';
import ConvertScreen from '../screens/ConvertScreen';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { themeColors } from '../theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const TAB_BAR_HEIGHT = Math.round(SCREEN_HEIGHT * 0.065);
const TAB_BAR_RADIUS = Math.round(TAB_BAR_HEIGHT / 2);

const renderTabIcon = (routeName: string, focused: boolean) => {
  let materialIconName: React.ComponentProps<typeof MaterialIcons>['name'];

  if (routeName === 'Home') materialIconName = 'home';
  else if (routeName === "Convert") materialIconName = "money-off";
  else if (routeName === "Bind") materialIconName = "notifications";
  else materialIconName = "home";

  const iconSize = focused ? 30 : 30;

  return (
    <View>
      <MaterialIcons 
        name={materialIconName} 
        size={iconSize}
        color={focused ? "#1D1B20" : "#37008aff"}
      />
    </View>
  );
};


function HomeTabs() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [
            styles.tabBar,
            { bottom: insets.bottom + 2 },
          ],
          tabBarItemStyle: styles.tabBarItem,
          tabBarIcon: ({ focused }) => renderTabIcon(route.name, focused)
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Convert" component={ConvertScreen} />
        <Tab.Screen name="Bind" component={BindScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeTabs">
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rotate"
          component={ConvertScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bind"
          component={BindScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "transparent"
  },
  tabBar: {
    position: "absolute",
    backgroundColor: themeColors.bgPrimary,
    marginRight: SCREEN_WIDTH * 0.05,
    marginLeft: SCREEN_WIDTH * 0.05,
    height: TAB_BAR_HEIGHT,
    width: SCREEN_WIDTH * 0.9,
    borderRadius: TAB_BAR_RADIUS,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  tabBarItem: {
    marginTop: 10,
    width: SCREEN_WIDTH / 5,
    height: TAB_BAR_HEIGHT - 10,
    justifyContent: "center",
    alignItems: "center",
  },
  topTabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: themeColors.bgPrimary,
    paddingVertical: 10,
  },
  topTabItem: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
