export const Add = (employees) => {
    return {
        type: ADD_DATA,
        payload: employees
    }
}

export const Remove = (id) => {
    return {
        type: REMOVE_DATA,
        payload: { id }

    }
}

export const Update_data = (employees, id) => {
    return {
        type: TOGGLE_DATA,
        payload: employees,
        d: id
    }
}