import React, { useState } from 'react';
import { useInterval } from '../../helpers/hooks';
import { Container, 
  FreeScroller, FreeScrollerSlide, 
  CircularSlider, CircularSlide,
  NavigationArrow, NavigationDots, NavigationDot } from './style';


export const FreeScrollerCarousel = ({ children, className }) => {
  return (
    <Container className={className}>
      <FreeScroller>
        { children && children.map((val, idx) => <FreeScrollerSlide key={idx}>{val}</FreeScrollerSlide>) }
      </FreeScroller>
    </Container>
  );
};

export const CircularCarousel = ({ children, className, ...modifiers }) => {
  const [ currentSlide, setSlide ] = useState(0);

  const slideLeft = () => setSlide(currentSlide > 0 ? currentSlide - 1 : children.length - 1);
  const slideRight = () => setSlide(currentSlide < children.length - 1 ? currentSlide + 1 : 0);

  useInterval(() => slideRight(), 6000);

  return (
    <Container className={className} hideOverflow {...modifiers}>
      <CircularSlider currentSlide={currentSlide}>
        { children && children.map((val, idx) => <CircularSlide count={children.length} key={idx}>{val}</CircularSlide>) }
      </CircularSlider>
      <NavigationArrow onClick={slideLeft}>{'<'}</NavigationArrow>
      <NavigationArrow onClick={slideRight} right>{'>'}</NavigationArrow>
      <NavigationDots>
        { children && children.map((_, idx) => 
            <NavigationDot key={idx}
                radius='0.8rem'
                active={currentSlide === idx ? true : false} 
                onClick={() => setSlide(idx)}/>
        )}
      </NavigationDots>
    </Container>
  );
};