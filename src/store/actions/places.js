//this is an action creator, simply a func that spits out an action which a js object with a type property
import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionTypes'

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    }
};

export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    }
};