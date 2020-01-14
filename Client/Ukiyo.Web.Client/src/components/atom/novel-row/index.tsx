import React, { ReactElement } from 'react';
import * as S from './style';

type Props = {
    title: string;
    link: string;
};

const NovelRow: React.FC<Props> = (props: Props): ReactElement => {
    const { title, link } = props;

    return (
        <S.NovelRowContainer href={link}>
            <S.NovelRowTitle>{title}</S.NovelRowTitle>
        </S.NovelRowContainer>
    );
};

export default NovelRow;
