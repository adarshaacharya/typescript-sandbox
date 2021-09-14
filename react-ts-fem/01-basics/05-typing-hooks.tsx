import * as React from 'react'

const Counter = () => {

  const [count, setCount] = React.useState(0)

  const increment = () => setCount(count => count + 1)
  const decrement = () => setCount(count => count - 1)
  const reset = () => setCount(0)


  const onChangeCount =(event : React.ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value)
  }

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={() => {}}>
          <label htmlFor="set-to">Set Count</label>
          <input id="set-to" type="number" value={count} onChange={onChangeCount} />
          <input type="submit" />
        </form>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
