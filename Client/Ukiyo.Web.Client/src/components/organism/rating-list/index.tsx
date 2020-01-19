import React from 'react';
import * as S from './style';
import Bar from '../../atom/bar';
import Text, { TextType } from '../../atom/text';

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
            {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
            {contents.map(c => (
                <Bar key={c.title + c.rating} fillRate={c.rating} title={c.title} />
            ))}
        </S.RatingListContainer>
    );
};

export default RatingList;
