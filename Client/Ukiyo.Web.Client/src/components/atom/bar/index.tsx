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
        <S.Bar color={background} width={width} height={height} rounded={rounded}>
            <S.Fill color={color} fillRate={fillRate} />
        </S.Bar>
    );
};

export default Bar;
