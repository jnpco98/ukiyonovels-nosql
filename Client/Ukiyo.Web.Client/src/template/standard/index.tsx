import React, { ReactElement } from 'react';
import * as S from './style';
import Text, { TextType } from '../../components/atom/text';
import DynamicHTML from '../../components/atom/dynamicHTML';

type Props = {
    pageHeading?: string;
    pageText?: string;

    contents?: {
        heading?: string;
        text: string;
    }[];
}

const StandardPage: React.FC<Props> = (props: Props): ReactElement => {
    const { pageHeading, pageText, contents } = props;

    return (
        <S.StandardPageContainer>
            {pageHeading && <S.StandardPageTitle>{pageHeading}</S.StandardPageTitle>}
            {pageText && <DynamicHTML HTMLString={pageText}/>}
            {
                contents && contents.map(c => 
                    <S.StandardPageContent>
                        {c.heading && <Text textType={TextType.SectionTitle}>{c.heading}</Text>}
                        {c.text && <DynamicHTML HTMLString={c.text}/>}
                    </S.StandardPageContent>
                )
            }
        </S.StandardPageContainer>
    );
};

export default StandardPage;