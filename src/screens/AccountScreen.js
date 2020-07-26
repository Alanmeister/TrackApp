import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { Feather } from '@expo/vector-icons';

const AccountScreen = () => { 
    const { signout } = useContext(AuthContext);
    return (
        <>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Account Screen</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Spacer>
                        <Button 
                            buttonStyle={styles.button}
                            title="Sign Out" 
                            onPress={signout}
                            />
                    </Spacer>
                </View>
        </>
    )
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <Feather name="settings" size={20} />
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 20,
        paddingTop: 40
    },
    bodyContainer: {
        flex: 6,
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: 'red',
    }
});

export default AccountScreen;