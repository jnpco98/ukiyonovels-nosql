import React, { useState, ReactElement, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import Text, { TextType } from '../../atom/text';
import * as S from './style';
import MenuBackdrop from '../../atom/backdrop';

export interface MenuItem {
    label: string;
    link: string;
}

type Props = {
    menuItems: MenuItem[];
    onSelect?: Function;
};

const NavigationMenu: React.FC<Props> = (props: Props): ReactElement => {
    const [active, setActive] = useState(0);
    const [floating, setFloating] = useState(false);
    const [drawerActive, setDrawerActive] = useState(false);
    const { menuItems, onSelect } = props;

    const containerRef = useRef(document.createElement('div'));
    const drawerRef = useRef(document.createElement('div'));
    const hamburgerRef = useRef(document.createElement('div'));

    const hamburgerScreenOffset = { top: 25, left: 13 };

    const handleScroll = (): void => setFloating(window.pageYOffset >= containerRef.current.scrollHeight);

    useEffect(() => onSelect && onSelect(active), []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return (): void => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSelect = (idx: number): void => {
        setActive(idx);
        if (onSelect) onSelect(idx);
        if (drawerActive) setDrawerActive(false);
    };

    const renderMenuItems = (): ReactElement[] =>
        menuItems.map(({ label, link }, idx) => (
            <S.MenuItem key={label + link} onClick={(): void => handleSelect(idx)} active={active === idx}>
                <S.MenuItemLink href={link || '#'}>{label}</S.MenuItemLink>
            </S.MenuItem>
        ));

    const renderUserLinks = (): ReactElement => (
        <>
            <S.MenuUserLink>
                <Text textType={TextType.Anchor} href="/account">
                    <FontAwesomeIcon icon={faUserAlt} />
                </Text>
            </S.MenuUserLink>
            <S.MenuUserLink>
                <Text textType={TextType.Anchor} href="/settings">
                    <FontAwesomeIcon icon={faCog} />
                </Text>
            </S.MenuUserLink>
        </>
    );

    return (
        <S.MenuContainer floating={floating} ref={containerRef}>
            <S.MenuLeft>
                <S.MenuHamburger onClick={(): void => setDrawerActive(!drawerActive)}>
                    <S.MenuHamburgerIcon
                        ref={hamburgerRef}
                        active={drawerActive}
                        clientRect={hamburgerRef.current && hamburgerRef.current.getBoundingClientRect()}
                        screenOffset={hamburgerScreenOffset}
                    />
                </S.MenuHamburger>
            </S.MenuLeft>

            <S.MenuRight>{renderUserLinks()}</S.MenuRight>

            <S.MenuDrawer
                ref={drawerRef}
                zIndex={51}
                sidenavActive={drawerActive}
                topOffset={`${containerRef.current.offsetTop + containerRef.current.scrollHeight}px`}
            >
                {renderMenuItems()}
            </S.MenuDrawer>
            <MenuBackdrop show={drawerActive} onClick={(): void => setDrawerActive(false)} />
        </S.MenuContainer>
    );
};

export default NavigationMenu;
