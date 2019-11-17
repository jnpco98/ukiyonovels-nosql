import styled, { keyframes } from 'styled-components';

const SlideLeft = keyframes`
  0% { transform: translateX(0) };
  100% { transform: translateX(-100%); };
`;

export const Container = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background: white;
  position: relative;
  margin: 0 auto;
  ${props => props.hideOverflow && `overflow: hidden;`};
`;

export const FreeScroller = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: hidden;
  box-shadow: 0 1px 20px -10px rgba(0, 0, 0);

  &::before, &::after {
    height: 100%;
    width: 200px;
    content: "";
    background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
    position: absolute;
  }

  &::before { left: 0; top: 0 }
  &::after { right: 0; top: 0; transform: rotateZ(180deg) }
`;

export const FreeScrollerSlide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  animation: ${SlideLeft} 25s linear infinite;

  & > * {
    height: 80%;
    padding: 0 2.6rem;
  }
`;

export const CircularSlider = styled.div`
  height: 100%;
  width: ${props => props.children.length * 100}%;
  display: flex;
  transform: translate(-${props => 100 / props.children.length * props.currentSlide}%);
  transition: transform 0.3s ease-in;
`;

export const CircularSlide = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  justify-content: center;
  width: ${props => 100/props.count}%;

  * {
    width: 100%;
    height: 100%;
  }
`;

export const NavigationArrow = styled.div`
  position: absolute;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%);

  ${props => 
    props.right ? 
      `right: 0.5rem;` : 
      `left: 0.5rem;`
  }
`;

export const NavigationDots = styled.ul`
  display: flex;
  position: absolute;
  left: 50%;
  bottom: 20px;
  list-style: none;
  transform: translateX(-50%);
`;

export const NavigationDot = styled.li`
  width: ${props => props.radius};
  height: ${props => props.radius};
  border-radius: 50%;
  border: 2px solid #333;
  background-color: ${props => props.active ? '#f2b716' : '#333'};
  cursor: pointer;

  & + li {
    margin-left: 1rem;
  }   
`;

