import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => { 
    const { 
        state: {name, recording, locations}, 
        startRecording, 
        stopRecording, 
        changeName 
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    return (
        <>
            <Spacer>
                <Input 
                    value={name}
                    onChangeText={changeName}
                    placeholder="Enter name"
                />
                {
                    recording 
                    ? <Button buttonStyle={styles.stop} title="Stop Recording" onPress={stopRecording}/> 
                    : <Button title="Start Recording" onPress={startRecording}/>
                }
                <Spacer/>
                {
                    !recording && locations.length
                    ? <Button buttonStyle={styles.save} title="Save Recording" onPress={saveTrack}/>
                    : null
                }
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({
    stop: {
        backgroundColor: 'red'
    },
    save: {
        backgroundColor: '#64dd17'
    }
});

export default TrackForm;