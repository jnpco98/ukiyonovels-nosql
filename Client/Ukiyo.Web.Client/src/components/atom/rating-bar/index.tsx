import React, { ReactElement, useState, useRef } from 'react';
import * as S from './style';

type Props = {
    title: string;
    rating: number;
};

const Rating: React.FC<Props> = (props: Props): ReactElement => {
    const { title, rating } = props;

    return (
        <S.RatingContainer>
            <S.RatingTextWrapper>
                <S.RatingTitle>{title}</S.RatingTitle>
                <S.RatingNumeric>{(rating * 10).toFixed(1)}</S.RatingNumeric>
            </S.RatingTextWrapper>
            <S.RatingBar rating={rating} />
        </S.RatingContainer>
    );
};

export default Rating;
