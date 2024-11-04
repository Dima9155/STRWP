const initialState = {
    User_data: []
};

const ADD_DATA = 'ADD_DATA';
const REMOVE_DATA = 'REMOVE_DATA';
const UPDATE_DATA = 'UPDATE_DATA';

export const todoreducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                User_data: [...state.User_data, action.payload]
            }
        case REMOVE_DATA:
            const dltdata = state.User_data.filter((ele, k) => k !== action.payload.id);

            return {
                ...state,
                User_data: dltdata
            }

        case UPDATE_DATA:
            const updatedata = state.User_data.map((ele, k) => k == action.d ? action.payload : ele)
            return {
                ...state,
                User_data: updatedata
            }

        default:
            return state;
    }
};