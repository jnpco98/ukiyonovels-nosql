import React, { ReactElement } from 'react';
import { AnyStyledComponent } from 'styled-components';
import * as S from './style';

export enum MenuType {
    SpeedRunner,
    NoEntry,
    Spread,
    Tear
}

type Props = {
    type: MenuType;
    active?: boolean;
};

export const HamburgerMenu: React.FC<Props> = (props: Props): ReactElement => {
    const { active, type } = props;

    /* eslint-disable */
    const generateSpan = (count: number): ReactElement[] =>
        Array(count)
            .fill(null)
            .map((_, idx) => <span key={idx} />);
    /* eslint-enable */

    let StyledHamburger: AnyStyledComponent;
    let spanCount: number;

    switch (type) {
        default:
        case MenuType.NoEntry:
            StyledHamburger = S.NoEntry;
            spanCount = 6;
            break;
        case MenuType.SpeedRunner:
            StyledHamburger = S.SpeedRunner;
            spanCount = 3;
            break;
        case MenuType.Spread:
            StyledHamburger = S.Spread;
            spanCount = 4;
            break;
        case MenuType.Tear:
            StyledHamburger = S.Tear;
            spanCount = 3;
            break;
    }

    return <StyledHamburger active={active}>{generateSpan(spanCount)}</StyledHamburger>;
};
