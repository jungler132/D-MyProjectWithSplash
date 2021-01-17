export const initialState = {
    movie : 'matrix',
    arrayDataBase: [],
    isLoadingShouldAnim:false
}
function reducerMovie(state = initialState , action) {
    switch (action.type) {
        case 'SET_MOVIE' :
            return {
                movie : action.payload
            };
        case 'SET_DATA' : 
            return {
                ...state,
                arrayDataBase : action.payload.arrayDataBase
            }
        case 'SET_LOADING' :
            return {
                ...state,
                isLoadingShouldAnim: action.payload
            }     
        default :
        return state;
    }
}
export default reducerMovie;