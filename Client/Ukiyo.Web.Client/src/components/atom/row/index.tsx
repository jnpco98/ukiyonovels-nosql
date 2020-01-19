import React, { ReactElement } from 'react';
import * as S from './style';

type Props = {
    title: string;
    count?: number;
    link?: string;

    bullet?: boolean;
    hoverDecoration?: boolean;
};

const Row: React.FC<Props> = (props: Props): ReactElement => {
    const { title, count, link, bullet, hoverDecoration } = props;

    return (
        <S.RowContainer hoverDecoration={hoverDecoration}>
            <S.RowTitle href={link} bullet={bullet}>{title}</S.RowTitle>
            {count && <S.RowCount>{Math.floor(count)}</S.RowCount>}
        </S.RowContainer>
    );
};

export default Row;
