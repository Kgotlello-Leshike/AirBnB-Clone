import axios from 'axios'
import {
    LISTING_LIST_REQUEST,
    LISTING_LIST_SUCCESS,
    LISTING_LIST_FAIL,
  } from "../types/listingTypes";


export const listListing = () => async (dispatch) => {
    try {
        dispatch({type: LISTING_LIST_REQUEST})

        const {data} = await axios.get('http://localhost:3000/listings');

        dispatch({type: LISTING_LIST_SUCCESS, payload : data});
    } catch (error) {
        dispatch({type: LISTING_LIST_FAIL, payload : error });

    }
}
