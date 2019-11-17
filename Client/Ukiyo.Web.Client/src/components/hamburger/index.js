import React from 'react';
import { SpeedRunner, NoEntry, Spread, Tear } from './style';

export const HamburgerMenu = ({ active, speedRunner, noEntry, spread, tear }) => {
  const generateSpan = (count) => Array(count).fill().map((_, idx) => <span key={idx}/>);

  return (
    <>
      {
        speedRunner &&
          <SpeedRunner active={active}>{generateSpan(3)}</SpeedRunner> ||
        noEntry &&
          <NoEntry active={active}>{generateSpan(6)}</NoEntry> ||
        spread &&
          <Spread active={active}>{generateSpan(4)}</Spread> ||
        tear &&
          <Tear active={active}>{generateSpan(3)}</Tear>
      }
    </>
  );
};