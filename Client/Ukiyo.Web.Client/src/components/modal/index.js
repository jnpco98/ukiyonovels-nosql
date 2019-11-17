import React, { useRef } from 'react';
import { Backdrop } from '../backdrop';
import { Container } from './style';

export const Modal = ({ width='35rem', height='24rem', children, setVisibility, show }) => {
  const modalRef = useRef(null);
  return (
    <Backdrop centerContent show={show} onClick={(e) => e.target !== modalRef.current && setVisibility(false)}>
      <Container ref={modalRef} width={width} height={height}>
        {children}
        <button onClick={() => setVisibility(false)}>Close</button>
      </Container>
    </Backdrop>
  );
};