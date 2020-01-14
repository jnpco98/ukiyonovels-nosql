import React from 'react';
import * as S from './style';
import RatingBar from '../../atom/rating-bar';

type Props = {
    headingText?: string;
    contents: {
        title: string;
        rating: number;
    }[];
};

const RatingList: React.FC<Props> = (props: Props) => {
    const { headingText, contents } = props;
    return (
        <S.RatingListContainer>
            <S.RatingListSectionDivider>
                {headingText && <S.RatingBarHeadingText>{headingText}</S.RatingBarHeadingText>}
            </S.RatingListSectionDivider>
            {contents.map(c => (
                <RatingBar key={c.title + c.rating} rating={c.rating} title={c.title} />
            ))}
        </S.RatingListContainer>
    );
};

export default RatingList;
