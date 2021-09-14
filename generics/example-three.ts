function makePair<T extends string | number, S extends boolean | T>() {
  // Stores a pair of values
  let pair: { first: T; second: S };

  function getPair() {
    return pair;
  }

  // Stores x as first and y as second
  function setPair(x: T, y: S) {
    pair = {
      first: x,
      second: y,
    };
  }

  return { getPair, setPair };
}

const { getPair, setPair } = makePair<string, string>();

// These will work
makePair<number, boolean>()
makePair<number, number>()
makePair<string, boolean>()
makePair<string, string>()

// This will fail because the second
// parameter must extend boolean | number,
// but instead it’s string
// makePair<number, string>()

setPair('nepal', 'amrit');
console.log(getPair());
