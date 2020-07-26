import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
};

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('/tracks');
    dispatch({ type: 'fetch_tracks', payload: response.data })
};
const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations });
};
const deleteTrack = dispatch => async (id) => {
    await trackerApi.delete('/tracks', { id });
    navigate('TrackList');
};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack, deleteTrack },
    []
);