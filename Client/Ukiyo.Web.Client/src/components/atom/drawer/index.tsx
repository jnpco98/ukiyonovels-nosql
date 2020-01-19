import React, { ReactElement } from 'react';
import * as S from './style';

type Props = {
    className?: string;
    drawerActive?: boolean;
    children?: React.ReactNode;
    parentZIndex?: number;
};

const SideDrawer: React.FC<Props> = (props: Props): ReactElement => {
    const { className, drawerActive, children, parentZIndex } = props;

    return (
            <S.SideDrawerContainer
                className={className}
                zIndex={parentZIndex - 1}
                sidenavActive={drawerActive}
            >
                {children}
            </S.SideDrawerContainer>
    );
};

export default SideDrawer;
