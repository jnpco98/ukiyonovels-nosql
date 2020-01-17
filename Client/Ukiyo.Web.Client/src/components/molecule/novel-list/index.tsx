import React from 'react';
import * as S from './style';
import NovelRow from '../../atom/novel-row';
import Text, { TextType } from '../../atom/text';

type Props = {
    headingText?: string;
    contents: {
        title: string;
        link: string;
    }[];
};

const NovelList: React.FC<Props> = (props: Props) => {
    const { headingText, contents } = props;
    return (
        <S.NovelListContainer>
            {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
            {contents.map(c => (
                <NovelRow key={c.title + c.link} link={c.link} title={c.title} />
            ))}
        </S.NovelListContainer>
    );
};

export default NovelList;
