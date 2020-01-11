import React, { ReactElement, forwardRef } from 'react';
import { AnyStyledComponent } from 'styled-components/macro';
import * as S from './style';

export enum MenuType {
    SpeedRunner,
    NoEntry,
    Spread,
    Tear
}

type Props = {
    type?: MenuType;
    active?: boolean;
    className?: string;
};

const HamburgerMenu: React.FC<Props> = (props: Props, ref: React.RefObject<HTMLElement>): ReactElement => {
    const { className, active, type } = props;

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

    return (
        <StyledHamburger ref={ref} active={active} className={className}>
            {generateSpan(spanCount)}
        </StyledHamburger>
    );
};

export default forwardRef(HamburgerMenu);
