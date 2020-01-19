import React, { ReactElement } from 'react';
import * as S from './style';

type Props = {
    title?: string;
    fillRate?: number;

    rounded?: boolean;
};

const Bar: React.FC<Props> = (props: Props): ReactElement => {
    const { title, fillRate, rounded } = props;

    return (
        <S.BarContainer>
            {
                title && 
                    <S.BarTextWrapper>
                        <S.BarTitle>{title}</S.BarTitle>
                        <S.BarRating>{(fillRate * 10).toFixed(1)}</S.BarRating>
                    </S.BarTextWrapper>
            }
            <S.BarFill rating={fillRate} rounded={rounded}/>
        </S.BarContainer>
    );
};

export default Bar;
