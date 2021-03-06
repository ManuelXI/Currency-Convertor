import React from 'react';
import { SafeAreaView, ScrollView, Linking, Alert, StatusBar} from 'react-native';

import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';



const openURL = (url) => {
    return Linking.openURL(url).catch(() => {
        Alert.alert('Sorry, something went wrong.', 'Please try again later')
    });
};

export default () => {
    return (
        <SafeAreaView style={{
            paddingTop: 50,
            flex: 1
        }}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

            <ScrollView>

                <RowItem
                    text="Themes"
                    onPress={() => alert('todo!')}
                    rightIcon={
                        <Entypo name="chevron-right" size={20} color={colors.blue} />
                    } />
                
                <RowSeparator />

                <RowItem
                    text="React Native Basics"
                    onPress={() => openURL('https://www.google.com/')}
                    rightIcon={
                        <Entypo name="export" size={20} color={colors.blue} />
                    } />
                
                <RowSeparator />

                <RowItem
                    text="React Native by Example"
                    onPress={() => alert('todo!')}
                    rightIcon={
                        <Entypo name="export" size={20} color={colors.blue} />
                    } />
                
                <RowSeparator />

            </ScrollView>
            

        </SafeAreaView>

    )
};