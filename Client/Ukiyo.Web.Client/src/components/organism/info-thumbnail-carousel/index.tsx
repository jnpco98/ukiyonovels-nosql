import React, { ReactElement } from 'react';
import { Settings } from 'react-slick';
import * as S from './style';
import { DEFAULT_SLIDER_SETTINGS } from '../../../utilities/slider';
import Text, { TextType } from '../../atom/text';

type Props = {
    className?: string;
    content: {
        heading: string;
        subtitle: string;
        genre: string;
        link: string;
        image: string;
    }[];
    headingText?: string;
};

const InfoThumbnailCarousel: React.FC<Props> = (props: Props): ReactElement => {
    const { content, headingText, className } = props;

    const sliderOptions: Settings = {
        ...DEFAULT_SLIDER_SETTINGS,
        swipeToSlide: true,
        prevArrow: <S.InfoThumbnailCarouselArrow />,
        nextArrow: <S.InfoThumbnailCarouselArrow />,
        variableWidth: true,
        centerMode: false
    };

    const generateCardContent = (start: number, last: number): React.ReactNode =>
        content
            .filter((c, idx) => idx >= start && idx < last)
            .map(({ heading, subtitle, genre, link, image }, idx, filtered) => (
                <S.InfoThumbnailCarouselItem
                    key={heading + subtitle}
                    heading={heading}
                    subtitle={subtitle}
                    genre={genre}
                    link={link}
                    image={image}
                />
            ));

    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <S.InfoThumbnailCarouselContainer className={className}>
            {headingText && <Text textType={TextType.SectionTitle}>{headingText}</Text>}
            <S.InfoThumbnailCarouselSlider {...sliderOptions}>{generateCardContent(0, content.length)}</S.InfoThumbnailCarouselSlider>
        </S.InfoThumbnailCarouselContainer>
    );
    /* eslint-enable react/jsx-props-no-spreading */
};

export default InfoThumbnailCarousel;
