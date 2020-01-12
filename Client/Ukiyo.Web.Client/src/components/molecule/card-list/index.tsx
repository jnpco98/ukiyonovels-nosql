import React from 'react';
import * as S from './style';

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
        <S.Container>
            <S.SectionDivider>{headingText && <S.HeadingText>{headingText}</S.HeadingText>}</S.SectionDivider>
            {content.map(({ title, link, imgSrc, description, meta }) => (
                <S.Card
                    key={title + description}
                    title={title}
                    link={link}
                    imgSrc={imgSrc}
                    description={description}
                    meta={meta}
                />
            ))}
        </S.Container>
    );
};

export default InfoCardList;
