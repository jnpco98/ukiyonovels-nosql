import React, { ReactElement } from 'react';
import Glyph, { GlyphType } from './glyph';
import * as S from './style';

type Props = {
    glyph: GlyphType;
    fill?: string;
    stroke?: string;
    size?: string;
    message?: string;
    countColor?: string;
    countBackground?: string;
    className?: string;
};

const Icon: React.FC<Props> = (props: Props): ReactElement => {
    const { glyph, fill, stroke, size = '2rem', message: count, countColor, countBackground, className } = props;

    return (
        <S.IconContainer
            className={className}
            message={count}
            countColor={countColor}
            countBackground={countBackground}
            size={size}
        >
            <S.IconSvg
                fill={fill}
                stroke={stroke}
                viewBox="0 0 32 32"
                aria-labelledby="title"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
            >
                <title id="title">{GlyphType[glyph]}</title>
                <Glyph glyph={glyph} />
            </S.IconSvg>
        </S.IconContainer>
    );
};

export default Icon;
