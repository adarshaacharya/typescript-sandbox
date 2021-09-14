class State<S> {
  state: S;

  getState() {
    return this.state;
  }
  setState(x: S) {
    this.state = x;
  }
}

const numState = new State<number>();
numState.setState(1);

const strState = new State<string>();
strState.setState('hello');

