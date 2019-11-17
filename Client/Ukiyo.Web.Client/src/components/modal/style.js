import styled, { keyframes } from 'styled-components';

const ModalOpen = keyframes`
  from {opacity: 0};
  to {opacity: 1};
`;

export const Container = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: rgba(255, 255, 255, 1);
  opacity: 1;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${ModalOpen} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;
