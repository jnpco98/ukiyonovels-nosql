import React, { ReactElement } from 'react';
import * as S from './style';

type Props = {
    title: string;
    count: number;
    link?: string;
};

const QSRow: React.FC<Props> = (props: Props): ReactElement => {
    const { title, count, link } = props;

    return (
        <S.QSRowContainer>
            <S.QSRowTitle href={link}>{title}</S.QSRowTitle>
            <S.QSRowCount>{Math.floor(count)}</S.QSRowCount>
        </S.QSRowContainer>
    );
};

export default QSRow;
