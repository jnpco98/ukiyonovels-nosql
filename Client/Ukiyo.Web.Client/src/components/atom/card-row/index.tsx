import React, { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';
import * as S from './style';
import Thumbnail from '../thumbnail';
import { truncate } from '../../../utilities/string';
import { SMALL, XXSMALL, MEDIUM } from '../../../settings/media';

type Props = {
    title: string;
    description: string;
    link: string;
    imgSrc: string;
};

const InfoCard: React.FC<Props> = (props: Props): ReactElement => {
    const { title, description, link, imgSrc } = props;

    const isXXSmallScreen = useMediaQuery({ minWidth: XXSMALL });
    const isSmallScreen = useMediaQuery({ minWidth: SMALL });
    const isDesktopScreen = useMediaQuery({ minWidth: MEDIUM });

    let textTruncate = 100;
    if (isXXSmallScreen) textTruncate = 140;
    if (isSmallScreen) textTruncate = 250;
    if (isDesktopScreen) textTruncate = 350;

    return (
        <S.Card>
            <Thumbnail imgSrc={imgSrc} link={link} />
            <S.CardContent>
                <S.Title>{title}</S.Title>
                <S.Description>{truncate(description, textTruncate)}</S.Description>
                <S.CardInfo>
                    <S.CardMeta>
                        <S.CalendarIcon />
                        <S.InfoText>45 min ago</S.InfoText>
                        <S.LikesIcon />
                        <S.InfoText>2.5k</S.InfoText>
                        <S.ViewsIcon />
                        <S.InfoText>12k</S.InfoText>
                    </S.CardMeta>
                    <S.CardButton href="#">Continue Reading</S.CardButton>
                </S.CardInfo>
            </S.CardContent>
        </S.Card>
    );
};

export default InfoCard;
