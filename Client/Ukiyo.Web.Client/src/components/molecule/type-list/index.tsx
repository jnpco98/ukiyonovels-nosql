import React, { ReactElement } from 'react';
import * as S from './style';
import Text, { TextType } from '../../atom/text';

type Props = {
    headingText: string;
    classifications: {
        name: string;
        link: string;
    }[]
};

const TypeList: React.FC<Props> = (props: Props): ReactElement => {
    const { headingText, classifications } = props;

    return (
        <S.TypeListContainer>
            <S.TypeTitle>{headingText}</S.TypeTitle>
            <S.TypeListClassifications>
            {
                classifications.map(c => 
                    <S.TypeListClassificationsItem>
                        <Text textType={TextType.Anchor} href={c.link}>{c.name}</Text>
                    </S.TypeListClassificationsItem>
                )
            }
            </S.TypeListClassifications>
        </S.TypeListContainer>
    );
};

export default TypeList;
