import React, { ReactElement } from 'react';
import * as S from './style';

type Props = {
    imgSrc: string;
    link?: string;
    children?: React.ReactNode;
};

const Thumbnail: React.FC<Props> = (props: Props): ReactElement => {
    const { imgSrc, link, children } = props;

    return (
        <S.Thumbnail href={link}>
            <S.ThumbnailImage src={imgSrc} />
            {children && <S.ThumbnailContent>{children}</S.ThumbnailContent>}
        </S.Thumbnail>
    );
};

export default Thumbnail;
