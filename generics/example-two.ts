
/**
 * generics example to show it doesn't accept non-number or non-string states
 */
 function makeState<S extends number | string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(x: S) {
    state = x;
  }

  return {
    getState,
    setState,
  };
}

const { getState, setState } = makeState();

// setState(boolean); // error
setState(2) // default type is number
console.log(getState());


// specifying generics default params
// Set the default type of T
function genericFunc<T = number>() {}
// T will be number inside the function
genericFunc()