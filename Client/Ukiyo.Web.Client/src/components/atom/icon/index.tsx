import React, { ReactElement } from 'react';
import Glyph, { GlyphType } from './glyph';
import * as S from './style';

type Props = {
    glyph: GlyphType;
    size?: string;
    count?: string;
    fill?: string;
    stroke?: string;
};

const Icon: React.FC<Props> = (props: Props): ReactElement => {
    const { glyph, size = '2rem', count, fill, stroke } = props;

    return (
        <S.Icon count={count} size={size}>
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
        </S.Icon>
    );
};

export default Icon;
