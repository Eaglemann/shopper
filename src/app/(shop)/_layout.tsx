import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={24} style={{ marginBottom: -3, color: "#1BC464" }} {...props} />;
}

const TabsLayout = () => { 
    return (
        <SafeAreaView style={style.safeArea}>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "blue",
                    tabBarInactiveTintColor: "gray",
                    tabBarLabelStyle: {fontSize: 16},
                    tabBarStyle: {
                        borderTopLeftRadius: 20, 
                        borderTopRightRadius: 20,
                        paddingTop: 10,},
                    headerShown: false,

                }}
            >
                <Tabs.Screen name="index"
                options={{
                    title: "Shop",
                    tabBarIcon(props) {
                        return <TabBarIcon name="shopping-cart" color={props.color} />;
                    }
                }} 
                />
                <Tabs.Screen name="orders"
                options={{
                    title: "Orders",
                    tabBarIcon(props) {
                        return <TabBarIcon name="shopping-cart" color={props.color} />;
                    }
                }} 
                />
            </Tabs>
        </SafeAreaView>
    ); 
}
export default TabsLayout;

const style = StyleSheet.create({ 
    safeArea: {flex: 1,}
 });