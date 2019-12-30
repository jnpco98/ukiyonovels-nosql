import React, { ReactElement } from 'react';
import * as S from './style';
import { truncate } from '../../../utilities/string';

type Props = {
    image: string;
    heading: string;
    subtitle?: string;
    genre?: string;
    link: string;
};

const Card: React.FC<Props> = (props: Props): ReactElement => {
    const { image, heading, subtitle, genre, link } = props;

    return (
        <S.Container>
            <a href={link}>
                <S.Image src={image} alt={heading} />
            </a>
            <S.Content>
                <S.Subtitle>{subtitle}</S.Subtitle>
                <S.ReadIcon />
                <S.Heading>{truncate(heading, 27)}</S.Heading>
                <S.Genre>{genre}</S.Genre>
            </S.Content>
        </S.Container>
    );
};

export default Card;
