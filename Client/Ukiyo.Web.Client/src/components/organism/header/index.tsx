import React, { FC, useState, ReactElement, useEffect, useRef } from 'react';
import Backdrop from '../../atom/backdrop';
import SearchOverlay from '../search-overlay';
import DynamicIcon from '../../molecule/dynamic-icon';
import * as S from './style';

interface MenuItem {
    label: string;
    link: string;
    key: string;
    icon?: boolean;
}

type Props = {
    mainMenuItems: MenuItem[];
    sideMenuItems: MenuItem[];
    onSelect?: Function;
};

const Header: FC<Props> = (props: Props): ReactElement => {
    const { mainMenuItems, sideMenuItems, onSelect } = props;

    const [activeMenuItem, setActiveMenuItem] = useState(sideMenuItems[0].key);
    const [floating, setFloating] = useState(false);
    const [drawerActive, setDrawerActive] = useState(false);
    const [searchOverlayActive, setSearchOverlayActive] = useState(false);

    const containerRef = useRef(document.createElement('div'));

    const handleScroll = (): void => setFloating(window.pageYOffset >= containerRef.current.scrollHeight);

    useEffect(() => onSelect && onSelect(activeMenuItem), []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return (): void => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSelect = (key: string): void => {
        setActiveMenuItem(key);
        if (onSelect) onSelect(key);
        if (drawerActive) setDrawerActive(false);
    };

    const renderLinks = (menuItem: MenuItem): ReactElement => {
        return (
            <S.HeaderMenuItem 
                className={`${menuItem.key === activeMenuItem && 'is-active'} ${menuItem.icon && 'is-icon'}`} 
                onClick={() => { 
                    menuItem.key === 'search' ? setSearchOverlayActive(true) : handleSelect(menuItem.key);
                }} 
            >
                <S.HeaderMenuItemLink href={menuItem.link}>
                    {menuItem.icon ? <DynamicIcon SVGString={menuItem.label} /> : menuItem.label}
                </S.HeaderMenuItemLink>
            </S.HeaderMenuItem>
        )
    }

    return (
        <S.HeaderContainer className={`${floating && 'is-floating'}`} ref={containerRef}>
            <S.HeaderLeftMenu>
                <S.HeaderHamburger onClick={(): void => setDrawerActive(!drawerActive)}>
                    <S.HeaderHamburgerIcon active={drawerActive} />
                </S.HeaderHamburger>
            </S.HeaderLeftMenu>

            <S.HeaderRightMenu>
                {mainMenuItems.map(mi => renderLinks(mi))}
            </S.HeaderRightMenu>
            
            <S.HeaderSideDrawer drawerActive={drawerActive}>
                {sideMenuItems.map(si => renderLinks(si))}
            </S.HeaderSideDrawer>
            
            <Backdrop show={drawerActive} onClick={(): void => setDrawerActive(false)} /> 
            
            <SearchOverlay active={searchOverlayActive} setActive={setSearchOverlayActive} onSearchSubmit={() => console.log('call api submit')}/>
        </S.HeaderContainer>
    );
};

export default Header;
