import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeViewStyles from './HomeViewStyles';

const HomeView = () => {
    return (
        <View style = {{flex: 1, alignItems: 'center'}}>
            <View style = {{flex: 1}} >
                <Text style={HomeViewStyles.Header}>PUSH THE BUTTON!</Text>
            </View>
            <View style = {{flex: 2}}>
               <TouchableOpacity 
               style={HomeViewStyles.Button}
               onPress={()=>{console.log("THE BUTTON WAS PRESSED!")}}>
                    <Text style={HomeViewStyles.ButtonText}>BUTTON</Text>
               </TouchableOpacity>
            </View>
        </View>
    )

};

export default HomeView;