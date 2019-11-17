import React, { useState, useRef } from 'react';
import { Container, Label, Panel } from './style';

const Tile = ({ label, children }) => {
  const [ expanded, toggleExpanded ] = useState(0);

  const panelRef = useRef(null);

  const toggleAccordion = () => { toggleExpanded(expanded ? 0 : `${panelRef.current.scrollHeight}px`); };

  return (
    <div>
      <Label onClick={toggleAccordion}>
        {label}<i className="fas fa-chevron-right"/>
      </Label>
      <Panel ref={panelRef} expanded={expanded}>
        {children}
      </Panel>
    </div>
  );
};

export const Accordion = ({ elements=[] }) => {
  elements = Array.isArray(elements) ? elements : [elements];
  return (
    <Container>
     { elements.map(({ label, content }) => <Tile label={label}>{content}</Tile>) }
    </Container>
  );
};