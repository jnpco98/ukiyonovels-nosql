import React, { ReactElement } from 'react';
import * as S from './style';

type Props = {
    className?: string;
    title: string;
    count?: number;
    link?: string;
};

const Row: React.FC<Props> = (props: Props): ReactElement => {
    const { className, title, count, link } = props;

    return (
        <S.RowContainer className={className}>
            <S.RowTitle href={link}>{title}</S.RowTitle>
            {count && <S.RowCount>{Math.floor(count)}</S.RowCount>}
        </S.RowContainer>
    );
};

export default Row;
