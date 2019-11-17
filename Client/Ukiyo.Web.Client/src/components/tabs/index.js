import React, { useState, useEffect } from 'react';
import { Container, Item } from './style';

export const Tabs = ({ items, onSelect }) => {
  const [active, setActive] = useState(0);

  useEffect(() => { onSelect && onSelect(active); }, []);

  const handleSelect = (idx) => {
    onSelect && onSelect(active);
    setActive(idx);
  };

  return (
    <Container>
      {items.map(({ title, subtitle }, idx) => 
        <Item active={active === idx} onClick={() => handleSelect(idx)}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </Item>)}
    </Container>
  );
};