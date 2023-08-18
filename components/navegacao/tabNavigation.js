import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Exemplos from './exemplos'; 
import Atividades from './atividades';

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarLabelStyle: {fontSize: 26, textAlign: 'center'}, 
        tabBarActiveTintColor: '#F05545', 
        tabBarInactiveTintColor:'#fafafa',     
        headerShown: false,           
        tabBarStyle: {
            backgroundColor: '#7F0000',                     
            marginTop: 0,
            textAlign: 'center',
            justifyContent: 'center',
            textAlignVertical: "center"
        }
    }}
    >
      <Tab.Screen 
        name="Exemplos" 
        component={Exemplos} 
        options={{
            //tabBarLabel: 'Profile', 
            //tabBarShowLabel: false,
            // tabBarIcon: ({ focused }) => {
            //     let color = focused ? '#F05545' : '#fafafa';
            //     return <MaterialIcons name="home" size={30} color={color} />;
            // },  
            tabBarIcon: () => {false},
          }}    
    />
      <Tab.Screen 
        name="Atividades" 
        component={Atividades} 
        options={{            
            tabBarIcon: () => {false},
        }}
    />
    </Tab.Navigator>
  );
} 

export default MyTabs;