import React, { useState, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from '../menu';
import * as S from './style';
import { HamburgerMenu } from '../../atom/hamburger';

type Props = {
    menuItems: MenuItem[];
    onSelect?: Function;
};

const MobileMenu: React.FC<Props> = (props: Props): ReactElement => {
    const [active, setActive] = useState(0);
    const [drawerActive, setDrawerActive] = useState(false);
    const { menuItems, onSelect } = props;

    const handleSelect = (idx: number): void => {
        setActive(idx);
        if (onSelect) onSelect(idx);
    };

    const renderMenu = (): ReactElement[] =>
        menuItems.map(({ label, link }, idx) => (
            <S.MenuItem key={label + link} onClick={(): void => handleSelect(idx)} active={active === idx}>
                <a href={link || '#'}>{label}</a>
            </S.MenuItem>
        ));

    return (
        <S.Container>
            <ul>
                <S.HamburgerLink onClick={(): void => setDrawerActive(!drawerActive)}>
                    <HamburgerMenu />
                </S.HamburgerLink>
            </ul>
            <S.Drawer sidenavActive={drawerActive}>{renderMenu()}</S.Drawer>
        </S.Container>
    );
};

export default MobileMenu;
