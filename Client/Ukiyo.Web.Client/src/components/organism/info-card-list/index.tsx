import React from 'react';
import * as S from './style';
import Text, { TextType } from '../../atom/text';

type Props = {
    headingText?: string;
    content: {
        title: string;
        link: string;
        imgSrc: string;
        description: string;

        meta?: {
            updatedOn?: string;
            likesCount?: string;
            viewsCount?: string;
        };
    }[];
};

const InfoCardList: React.FC<Props> = (props: Props) => {
    const { headingText, content } = props;
    return (
        <S.CardListContainer>
            {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
            {content.map(({ title, link, imgSrc, description, meta }) => (
                <S.CardListItem
                    key={title + description}
                    title={title}
                    link={link}
                    imgSrc={imgSrc}
                    description={description}
                    meta={meta}
                />
            ))}
        </S.CardListContainer>
    );
};

export default InfoCardList;
