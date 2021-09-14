interface IPair<X, Y> {
  first: X;
  second: Y;
}

type Pair<X, Y> = {
  first: X;
  second: Y;
};

function makePair<X, Y>() {
  let pair: IPair<X, Y>;
}
