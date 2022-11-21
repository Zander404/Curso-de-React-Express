import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Home } from "../screens/Home";
import { Game } from "../screens/Game";
import { GameCard } from "../components/GameCard";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="home"
                component={Home}
                
            />
            <Screen
                name="game"
                component={Game}
                />
            
        </Navigator>
    )
}