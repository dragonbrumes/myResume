import { IS_AUTH } from "../actions/types"
/**
 * État initial pour le state de l'application
 */
const initialState = {
  isAuth: null
}

/**
 * Reducer de l'application
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_AUTH:
      return { ...state, isAuth: action.payload }

    default:
      return state
  }
}

export default reducer
