import React, { useState, useEffect, forwardRef, useRef } from 'react';
import { Container, MenuItem, Drawer } from './style';
import { useMediaQuery } from 'react-responsive';
import { MEDIUM } from '../../helpers/media';
import { HamburgerMenu } from '../hamburger';
import { Backdrop } from '../backdrop';

export const Navigation = forwardRef(({ menuItems, onSelect, headerOffset }, innerRef) => {
  const [active, setActive] = useState(0);
  const [drawerActive, setDrawerActive] = useState(false);

  const isTablet = useMediaQuery({ minWidth: MEDIUM });
  const drawerRef = useRef(null);

  useEffect(() => { onSelect && onSelect(active); }, []);

  useEffect(() => {
    const handleResize = () => 
      drawerActive && isTablet && setDrawerActive(false);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isTablet]);

  const handleSelect = (idx) => {
    setActive(idx);
    onSelect && onSelect(idx);
    drawerActive && setDrawerActive(false); 
  };

  const renderMenu = () => 
     menuItems.map(({label, link}, idx) => 
      <MenuItem key={idx} onClick={() => handleSelect(idx)} active={active === idx}>
        <a href={link || '#'}>{label}</a>
      </MenuItem>);

  return (
    <Container ref={innerRef}>
      <ul>
      {
        isTablet ?
          renderMenu() :
          <MenuItem onClick={() => setDrawerActive(!drawerActive)}>
            <HamburgerMenu speedRunner active={drawerActive}/>
          </MenuItem>
      }
      </ul>
      <ul>
        <MenuItem>
          <a><i className="fas fa-user-alt"/></a>
        </MenuItem>
        <MenuItem>
          <a><i className="fas fa-cog"></i></a>
        </MenuItem>
      </ul>
      <Backdrop show={drawerActive} onClick={() => setDrawerActive(false)} transparent/>
      <Drawer ref={drawerRef} sidenavActive={drawerActive} topOffset={headerOffset} height={drawerActive ? drawerRef.current.scrollHeight : '0'}>
        { renderMenu() }
      </Drawer>
    </Container>
  );
});