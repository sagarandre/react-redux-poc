const initState  = {
    todo : 'hello world'
}

const rootReducer = (state = initState, action) => {

    if(action.type === 'CHANGE_TEXT')
    {
        return {
            todo : action.txt
        }
    }
  return state;
}

export default rootReducer;