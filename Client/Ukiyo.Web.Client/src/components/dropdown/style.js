import styled, { keyframes } from 'styled-components';
import { Button } from '../button'

const ShowMenu = keyframes`
    0% { opacity: 0; -webkit-transform: translateY(-5%); }   
    100% { opacity: 1; -webkit-transform: translateY(0); }
`;

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const DropdownList = styled.ul`
  width: 100%;
  display: ${props => props.expanded ? 'flex': 'none'};
  flex-direction: column;
  top: 100%;
  position: absolute;
  align-items: center;
  border: 1px solid #ccc;
  animation: ${ShowMenu} 0.06s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const DropdownButton = styled(Button)``;

export const DropdownListItem = styled.li`
  width: 100%;
  background: white;
  padding: 0.6rem;
  /* border-bottom: 1px solid #1cbd6a; */
  cursor: pointer;
  text-align: left;

  &:first-of-type {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }

  &:last-of-type {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
`;