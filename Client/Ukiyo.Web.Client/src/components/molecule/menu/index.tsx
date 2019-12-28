import React, { useState, ReactElement, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { SMALL } from '../../../settings/media';
import { HamburgerMenu } from '../../atom/hamburger';
import * as S from './style';
import Backdrop from '../../atom/backdrop';

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
    const [drawerActive, setDrawerActive] = useState(false);
    const { menuItems, onSelect } = props;

    const isMobile = useMediaQuery({ maxWidth: SMALL });
    const containerRef = useRef(document.createElement('div'));
    const drawerRef = useRef(document.createElement('div'));

    useEffect(() => onSelect && onSelect(active));
    useEffect(() => {
        const handleResize = (): void => drawerActive && !isMobile && setDrawerActive(false);
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    });

    const handleSelect = (idx: number): void => {
        setActive(idx);
        if (onSelect) onSelect(idx);
        if (drawerActive) setDrawerActive(false);
    };

    const renderMenuItems = (): ReactElement[] =>
        menuItems.map(({ label, link }, idx) => (
            <S.MenuItem key={label + link} onClick={(): void => handleSelect(idx)} active={active === idx}>
                <a href={link || '#'}>{label}</a>
            </S.MenuItem>
        ));

    const renderUserLinks = (): ReactElement => (
        <>
            <S.UserLink>
                <a href="/account">
                    <FontAwesomeIcon icon={faUserAlt} />
                </a>
            </S.UserLink>
            <S.UserLink>
                <a href="/settings">
                    <FontAwesomeIcon icon={faCog} />
                </a>
            </S.UserLink>
        </>
    );

    return (
        <S.Container ref={containerRef}>
            {isMobile ? (
                <>
                    <ul>
                        <S.HamburgerLink onClick={(): void => setDrawerActive(!drawerActive)}>
                            <HamburgerMenu />
                        </S.HamburgerLink>
                    </ul>

                    <Backdrop show={drawerActive} onClick={(): void => setDrawerActive(false)} />
                    <S.Drawer
                        ref={drawerRef}
                        sidenavActive={drawerActive}
                        topOffset={`${containerRef.current.offsetTop + containerRef.current.scrollHeight}px`}
                        height={`${drawerActive ? drawerRef.current.scrollHeight : 0}px`}
                    >
                        {renderMenuItems()}
                    </S.Drawer>
                </>
            ) : (
                <>
                    <ul>{renderMenuItems()}</ul>
                    <ul>{renderUserLinks()}</ul>
                </>
            )}
        </S.Container>
    );
};

export default NavigationMenu;
