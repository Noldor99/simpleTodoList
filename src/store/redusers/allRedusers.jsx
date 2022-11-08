import {INIT_TODO, DELETE_TODO, ADD_TODO, UPDATE_TODO_DONE,UPDATE_TODO_TEXT} from '../consts/consts'

const initState ={
  items: []
}

export default (state = initState, action) => {
  switch (action.type) {

    case INIT_TODO:
      return {...state, items: action.payload}

    case ADD_TODO:
      return {...state, items: [...state.items, action.payload]}
      
      case DELETE_TODO: {
        const { id } = action.payload
        return {...state, items: state.items.filter((item) => item.id !== id)}
      }
      case UPDATE_TODO_DONE:{
        const {id, done} = action.payload
        console.log(done)
          return {...state, items: state.items.map((item)=>{
            if(item.id === id){
              return {...item, done}
            }
            return item
          })}
      }
      case UPDATE_TODO_TEXT:{
        const {id, text} = action.payload
        console.log(text)
          return {...state, items: state.items.map((item)=>{
            if(item.id === id){
              return {...item, text}
            }
            return item
          })}
      }
    default:
      return state
  }
}
  