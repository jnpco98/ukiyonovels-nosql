import React, { useState, useRef, useEffect } from 'react';
import { AppContainer } from './style';
import Reset from '../helpers/reset';
import { debounce } from '../helpers/delay';

const App: React.FC = () => {
  const [headerOffset, setHeaderOffset] = useState("0");
  const navigationRef = useRef(document.createElement('div'));

  useEffect(() => {
    setHeaderOffset(`${navigationRef.current.getBoundingClientRect().bottom}px`);
  }, []);

  return (
    <AppContainer>
      <Reset/>
      TEST
    </AppContainer>
  );
}

export default App;
