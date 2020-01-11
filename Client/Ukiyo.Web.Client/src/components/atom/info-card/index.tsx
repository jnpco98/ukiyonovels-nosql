import React, { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';
import * as S from './style';
import Thumbnail from '../thumbnail';
import { truncate } from '../../../utilities/string';
import { SMALL, XXSMALL, MEDIUM } from '../../../settings/media';

type Props = {
    className?: string;
    title: string;
    description: string;
    link: string;
    imgSrc: string;

    meta?: {
        updatedOn?: string;
        likesCount?: string;
        viewsCount?: string;
    };
};

const InfoCard: React.FC<Props> = (props: Props): ReactElement => {
    const { className, title, description, link, imgSrc, meta } = props;

    const isXXSmallScreen = useMediaQuery({ minWidth: XXSMALL });
    const isSmallScreen = useMediaQuery({ minWidth: SMALL });
    const isDesktopScreen = useMediaQuery({ minWidth: MEDIUM });

    let textTruncate = 100;
    if (isXXSmallScreen) textTruncate = 140;
    if (isSmallScreen) textTruncate = 250;
    if (isDesktopScreen) textTruncate = 350;

    return (
        <S.Card className={className}>
            <Thumbnail imgSrc={imgSrc} link={link} />
            <S.CardContent>
                <S.Title>{title}</S.Title>
                <S.Description>{truncate(description, textTruncate)}</S.Description>
                <S.CardInfo>
                    {meta && (
                        <S.CardMeta>
                            {meta.updatedOn && (
                                <>
                                    <S.CalendarIcon />
                                    <S.InfoText>{meta.updatedOn}</S.InfoText>
                                </>
                            )}
                            {meta.likesCount && (
                                <>
                                    <S.LikesIcon />
                                    <S.InfoText>{meta.likesCount}</S.InfoText>
                                </>
                            )}
                            {meta.viewsCount && (
                                <>
                                    <S.ViewsIcon />
                                    <S.InfoText>{meta.viewsCount}</S.InfoText>
                                </>
                            )}
                        </S.CardMeta>
                    )}
                    <S.CardButton href="#">Continue Reading</S.CardButton>
                </S.CardInfo>
            </S.CardContent>
        </S.Card>
    );
};

export default InfoCard;
