import IAction from "../interfaces/IAction"
import IAppState from "../interfaces/IAppState"



export default function appReducer(state:IAppState, action:IAction): IAppState {
    switch (action.type) {
      case 'MAS':
        return { ...state, count: state.count + 1 }
      case 'MENOS':
        return { ...state,count: state.count - 1}
      default:
        return state
    }
  }