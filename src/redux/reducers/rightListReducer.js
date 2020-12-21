// 在react中，immutable主要是防止state对象被错误赋值。
import { fromJS } from 'immutable'
const rightListReducer = (prevState = [], action) => {
  let { type, payload } = action
  switch (type) {
    case 'setRightsList':
      var newstate = fromJS(prevState)
      return newstate.concat(payload).toJS()
    default:
      return prevState
  }x
}
export default rightListReducer