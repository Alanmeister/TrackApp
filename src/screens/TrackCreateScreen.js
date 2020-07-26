// import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { Feather } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => { 
    const { state: {recording}, addLocation } = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h3 style={styles.header}>Create a Track</Text>
            <Map/>
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm/>
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <Feather name="map-pin" size={20} />
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        marginVertical: 10
    }
});

export default withNavigationFocus(TrackCreateScreen);