import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Layout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#fffff",
      tabBarInactiveTintColor: "gray",
    
      tabBarStyle: {
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#e0e0e0",
      },
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="my-network"
        options={{
          headerShown: false,
          title: "My Network",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="post"
        options={{
          headerShown: false,
          title: "Post",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="add-box" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          headerShown: false,
          title: "Notifications",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="notifications-sharp" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="jobs"
        options={{
          headerShown: false,
          title: "Jobs",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="bag-personal"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}