import React, { useState, useRef, useEffect } from 'react';
import { Container } from './style';

import { Reset } from '../reset';

import { Navigation } from '../components/navigation/';
import { Header } from '../components/header';

import Home from '../pages/home';

import headerBg from '../assets/images/header_img.jpg';

import { navigation } from '../settings';

const App = () => {
  const [headerOffset, setHeaderOffset] = useState(0);

  const navigationRef = useRef(null);

  useEffect(() => {
    setHeaderOffset(`${navigationRef.current.getBoundingClientRect().bottom}px`);
  }, []);

  return (
    <Container>
      <Reset/>
      <Header background={headerBg} height={'10rem'}/>
      <Navigation ref={navigationRef} menuItems={navigation.items} headerOffset={headerOffset}/>
      <Home/>
    </Container>
  );
}

export default App;
