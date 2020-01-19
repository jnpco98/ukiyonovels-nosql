import React, { ReactElement } from 'react';
import * as S from './style';
import Text, { TextType } from '../../atom/text';

type Props = {
    headingText?: string;
    details: {
        name: string;
        link: string;
    }[]
};

const NovelDetails: React.FC<Props> = (props: Props): ReactElement => {
    const { headingText, details } = props;

    return (
        <S.NovelDetailsContainer>
            <S.NovelDetailsType>{headingText}</S.NovelDetailsType>
            <S.NovelDetailsList>
            {
                details.map(d => 
                    <S.NovelDetailsItem>
                        <Text textType={TextType.Anchor} href={d.link}>{d.name}</Text>
                    </S.NovelDetailsItem>
                )
            }
            </S.NovelDetailsList>
        </S.NovelDetailsContainer>
    );
};

export default NovelDetails;
