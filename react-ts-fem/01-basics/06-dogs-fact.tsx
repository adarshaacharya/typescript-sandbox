import * as React from 'react';
import { fetchDogFacts, DogFactType } from './dog-facts';

type FormProps = {
  handleDogFactsSubmit: (n: number) => void;
};

const Form = ({ handleDogFactsSubmit }: FormProps) => {
  const [num, setNum] = React.useState(1);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleDogFactsSubmit(num);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input
          type="number"
          min="1"
          max="10"
          id="number-of-facts"
          value={num}
          onChange={(e) => setNum(+e.target.value)}
        />
      </div>
      <input type="submit" value="Fetch Dog Facts" />
    </form>
  );
};

const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="dog-fact">
      <h3>Dog Fact</h3>
      <p>{fact}</p>
    </article>
  );
};

const Application = () => {
  const [dogFacts, setDogFacts] = React.useState<DogFactType[]>([]);

  // callback function
  const handleDogFactsSubmit = async (n: number) => {
    const facts = await fetchDogFacts(n);
    setDogFacts(facts);
  };

  return (
    <main>
      <Form handleDogFactsSubmit={handleDogFactsSubmit} />
      <section>
        {dogFacts.map((dogfact) => (
          <Fact fact={dogfact.fact} key={dogfact.id} />
        ))}
      </section>
    </main>
  );
};

export default Application;
