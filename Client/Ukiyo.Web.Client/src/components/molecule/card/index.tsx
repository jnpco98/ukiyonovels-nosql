import React, { ReactElement } from 'react';
import * as S from './style';
import Text, { TextType } from '../../atom/text';
import Thumbnail from '../../atom/thumbnail';
import { GlyphType } from '../../atom/icon/glyph';
import Icon from '../../atom/icon';

type Props = {
    title?: string;
    children: React.ReactNode;
    link: string;
    imgSrc: string;
    buttonMessage?: string;
};

const Card: React.FC<Props> = (props: Props): ReactElement => {
    const { title, children, link, imgSrc, buttonMessage } = props;

    return (
        <S.Card>
            <Thumbnail imgSrc={imgSrc} link={link} />
            <S.CardContent>
                {title && <Text type={TextType.SubsectionTitle}>{title}</Text>}
                <Text type={TextType.SubsectionTitle}>{children}</Text>
                <S.CardInfo>
                    <S.CardMeta>
                        <Icon glyph={GlyphType.Calendar} size="1.2rem" />
                        <Text type={TextType.Span}>45 Minutes ago</Text>
                        <Icon glyph={GlyphType.LikeFill} message="1" size="1.2rem" />
                        <Icon glyph={GlyphType.View} message="1" size="1.2rem" />
                    </S.CardMeta>
                    <S.CardButton>{buttonMessage || 'Continue Reading'}</S.CardButton>
                </S.CardInfo>
            </S.CardContent>
        </S.Card>
    );
};

export default Card;
