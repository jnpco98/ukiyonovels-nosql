import React, { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';
import { truncate } from '../../../utilities/string';
import { SMALL, MEDIUM } from '../../../settings/media';
import * as S from './style';

type Props = {
    image: string;
    heading: string;
    subtitle?: string;
    genre?: string;
    link: string;
};

const Card: React.FC<Props> = (props: Props): ReactElement => {
    const { image, heading, subtitle, genre, link } = props;

    const isSmallScreen = useMediaQuery({ minWidth: SMALL });
    const isDesktopScreen = useMediaQuery({ minWidth: MEDIUM });

    let textTruncate = 35;
    if (isSmallScreen) textTruncate = 35;
    if (isDesktopScreen) textTruncate = 40;

    return (
        <S.Container>
            <a href={link}>
                <S.Image src={image} alt={heading} />
            </a>
            <S.Content>
                <S.Subtitle>{subtitle}</S.Subtitle>
                <S.ReadIconLink href={link}>
                    <S.IconWrapper>
                        <S.ReadIcon />
                    </S.IconWrapper>
                </S.ReadIconLink>
                <S.Heading>{truncate(heading, textTruncate)}</S.Heading>
                <S.Genre>{truncate(genre, textTruncate)}</S.Genre>
            </S.Content>
        </S.Container>
    );
};

export default Card;
