import React, { ReactElement } from 'react';
import * as S from './style';
import Text, { TextType } from '../../components/atom/text';
import DynamicHTML from '../../components/atom/dynamic-html';

type Props = {
}

const PageNotFound: React.FC<Props> = (props: Props): ReactElement => {
    const {} = props;

    return (
        <>
            <S.PageNotFoundContainer>
                <S.PageNotFoundHeading>OOPS</S.PageNotFoundHeading>
                <S.PageNotFoundSubheading>404 - The page can't be found</S.PageNotFoundSubheading>
            </S.PageNotFoundContainer>
        </>
    );
};

export default PageNotFound;