import React, { ReactElement } from 'react';
import purifyHTML from '../../../utilities/purifyHTML';
import * as S from './style';

type Props = {
    HTMLString: string;
}

const DynamicHTML: React.FC<Props> = (props: Props): ReactElement => {
    const { HTMLString } = props;

    return (
        <S.DynamicHTMLContainer dangerouslySetInnerHTML={{ __html: purifyHTML(HTMLString) }}/>
    );
};

export default DynamicHTML;