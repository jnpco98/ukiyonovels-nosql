import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../helpers/hooks';
import { Container, DropdownButton, DropdownList, DropdownListItem } from './style';

export const Dropdown = ({ values, onSelect, title, className }) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(-1);
  
  const dropdownListRef = useRef(null);
  const buttonRef = useRef(null);

  useOnClickOutside([dropdownListRef, buttonRef], () => setExpanded(false));

  const handleSelect = (idx) => {
    onSelect && onSelect(values[selected]);
    setSelected(idx);
    setExpanded(false);
  };

  return (
    <Container className={className}>
      <DropdownButton ref={buttonRef} treehouse onClick={() => setExpanded(!expanded)}>
        {selected === -1 ? title : values[selected].label}
      </DropdownButton>
      <DropdownList ref={dropdownListRef} expanded={expanded}>
        {
          values.map(({ value, label }, idx) => 
            <DropdownListItem key={idx} onClick={() => handleSelect(idx)}>
              {label || value}
            </DropdownListItem>)
        }
      </DropdownList>
    </Container>
  );
};
 