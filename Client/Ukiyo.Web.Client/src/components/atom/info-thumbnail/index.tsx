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
    className?: string;
};

const InfoThumbnail: React.FC<Props> = (props: Props): ReactElement => {
    const { className, image, heading, subtitle, genre, link } = props;

    const isSmallScreen = useMediaQuery({ minWidth: SMALL });
    const isDesktopScreen = useMediaQuery({ minWidth: MEDIUM });

    let textTruncate = 35;
    if (isSmallScreen) textTruncate = 35;
    if (isDesktopScreen) textTruncate = 40;

    return (
        <S.Container className={className}>
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

export default InfoThumbnail;
