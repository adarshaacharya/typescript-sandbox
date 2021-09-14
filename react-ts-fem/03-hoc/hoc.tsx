import * as React from 'react';

import { CharacterType, fetchCharacter } from './characters';

import { Loading } from './Loading';
import { CharacterInformation } from './CharacterInformation';

type withCharacterProps = {
  character : CharacterType
}

function withCharacter <T>(Component: React.ComponentType<T>)  {
  return (props : Omit<T, keyof withCharacterProps>) => {
    const [character, setCharacter] = React.useState<CharacterType | null>(
      null
    );
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    }, []);

    if(loading) return <Loading />

    return <Component {...(props as T)}  character={character} />

  };
};

const CharacterInformationWithCharacter = withCharacter(CharacterInformation);

const Application = () => {
  return (
    <main>
       <CharacterInformationWithCharacter />
    </main>
  );
};

export default Application;
