import React, { ReactElement } from 'react';
import * as S from './style';

type Props = {
    width?: string;
    height?: string;
    color?: string;
    background?: string;
    rounded?: boolean;
    fillRate?: number;
};

const Bar: React.FC<Props> = (props: Props): ReactElement => {
    const { width, height, color, background, rounded, fillRate } = props;

    return (
        <S.BarContainer color={background} width={width} height={height} rounded={rounded}>
            <S.BarFill color={color} fillRate={fillRate} />
        </S.BarContainer>
    );
};

export default Bar;
