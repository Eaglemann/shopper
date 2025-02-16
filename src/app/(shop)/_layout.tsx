import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const TabsLayout = () => { 
    return (
        <SafeAreaView>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "blue",
                    tabBarInactiveTintColor: "gray",
                    tabBarLabelStyle: {fontSize: 16},
                    tabBarStyle: {
                        borderTopLeftRadius: 20, 
                        borderTopRightRadius: 20,
                        paddingTop: 10,},

                }}
            >
                <Tabs.Screen name="index"
                options={{headerShown: true}} 
                />
                <Tabs.Screen name="orders"
                options={{}} 
                />
            </Tabs>
        </SafeAreaView>
    ); 
}
export default TabsLayout;