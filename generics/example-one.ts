
/**
 * generics example to show it accepts only one type
 */
function makeState<S>() {
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

const { getState, setState } = makeState<string>();

setState('foo');
console.log(getState());
