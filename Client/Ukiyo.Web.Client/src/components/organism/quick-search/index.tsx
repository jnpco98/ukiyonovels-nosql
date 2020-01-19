import React from 'react';
import * as S from './style';
import Row from '../../atom/row';
import Text, { TextType } from '../../atom/text';

type Props = {
    headingText?: string;
    contents: {
        title: string;
        count: number;
        link?: string;
    }[];
};

const QuickSearch: React.FC<Props> = (props: Props) => {
    const { headingText, contents } = props;
    return (
        <S.QuickSearchContainer>
            {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
            {contents.map(c => (
                <Row key={c.title + c.count} count={c.count} title={c.title} bullet hoverDecoration/>
            ))}
        </S.QuickSearchContainer>
    );
};

export default QuickSearch;
