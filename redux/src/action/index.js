
export const add = (value) => {
    return {
        type: 'add',
        payload: value,
    }
}

export const del = (value) => {
    return {
        type: 'delete',
        payload: value,
    }
}

export const update = (index, value) => {
    return {
        type: 'update',
        payload: {index, value},
    }
}