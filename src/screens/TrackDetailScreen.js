import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContext';
import Spacer from '../components/Spacer';

const TrackDetailScreen = ({ navigation }) => { 
    const { state, deleteTrack } = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;

    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.nameTrack}>{track.name}</Text>
            </View>
            <View style={styles.bodyContainer}>
                <MapView 
                    style={styles.map}
                    initialRegion={{
                        longitudeDelta: 0.01,
                        latitudeDelta: 0.01,
                        ...initialCoords
                    }}
                    >
                    <Polyline
                        coordinates={track.locations.map(loc => loc.coords)}
                        />
                </MapView>
                <Spacer/>
                <Button 
                    buttonStyle={styles.button} 
                    title="Delete track"
                    onPress={(_id) => deleteTrack(_id)}
                />
            </View>
        </>
    )
};

TrackDetailScreen.navigationOptions = {
    title: 'Track Detail'
};

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 16
    },
    bodyContainer:{
        flex: 14,
    },
    map: {
        height: 250
    },
    nameTrack: {
        fontSize: 20
    },
    button: {
        backgroundColor: 'red',
        marginTop: 50,
        marginHorizontal: 60
    }
});

export default TrackDetailScreen;