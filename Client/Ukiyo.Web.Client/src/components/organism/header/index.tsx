import React, { useState, ReactElement, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faCog, faSearch } from '@fortawesome/free-solid-svg-icons';
import Text, { TextType } from '../../atom/text';
import * as S from './style';
import Backdrop from '../../atom/backdrop';
import SearchOverlay from '../search-overlay';

type Props = {
    menuItems: {
        label: string;
        link: string;
    }[];
    onSelect?: Function;
};

const Header: React.FC<Props> = (props: Props): ReactElement => {
    const { menuItems, onSelect } = props;

    const [active, setActive] = useState(0);
    const [floating, setFloating] = useState(false);
    const [drawerActive, setDrawerActive] = useState(false);
    const [searchOverlayActive, setSearchOverlayActive] = useState(false);

    const containerRef = useRef(document.createElement('div'));

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
            <S.HeaderMenuItem key={label + link} onClick={(): void => handleSelect(idx)} active={active === idx}>
                <S.HeaderMenuItemLink href={link || '#'}>{label}</S.HeaderMenuItemLink>
            </S.HeaderMenuItem>
        ));

    const renderUserLinks = (): ReactElement => (
        <>
            <S.HeaderUserLink>
                <Text textType={TextType.Anchor} href="/account">
                    <FontAwesomeIcon icon={faUserAlt} />
                </Text>
            </S.HeaderUserLink>
            <S.HeaderUserLink>
                <Text textType={TextType.Anchor} href="/settings">
                    <FontAwesomeIcon icon={faCog} />
                </Text>
            </S.HeaderUserLink>
        </>
    );

    return (
        <S.HeaderContainer floating={floating} ref={containerRef}>
            <S.HeaderLeftMenu>
                <S.HeaderHamburger onClick={(): void => setDrawerActive(!drawerActive)}>
                    <S.HeaderHamburgerIcon active={drawerActive} />
                </S.HeaderHamburger>
            </S.HeaderLeftMenu>

            <S.HeaderRightMenu>
                <S.HeaderUserLink>
                    <Text textType={TextType.Anchor} href="#!" onClick={() => setSearchOverlayActive(true)}>
                        <FontAwesomeIcon icon={faSearch} />
                    </Text>
                </S.HeaderUserLink>
                {renderUserLinks()}
            </S.HeaderRightMenu>

            <S.HeaderSideDrawer drawerActive={drawerActive} >
                <S.HeaderSideDrawerMenu> {renderMenuItems()} </S.HeaderSideDrawerMenu>
            </S.HeaderSideDrawer>

            <Backdrop show={drawerActive} onClick={(): void => setDrawerActive(false)} /> 
            <SearchOverlay active={searchOverlayActive} setActive={setSearchOverlayActive} onSearchSubmit={() => console.log('call api submit')}/>
        </S.HeaderContainer>
    );
};

export default Header;
