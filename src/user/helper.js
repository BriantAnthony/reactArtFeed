// returns true if state.token is defined or false, if it is no defined
export const authCheck = (state) => {
  if(state.token){
    return true
  } else {
    return false
  }
}