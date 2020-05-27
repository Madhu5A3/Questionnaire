export const UserAction = (data) => {
    console.log(data)
    return {
        type: 'USER_DATA',
        payload: data
    }
}