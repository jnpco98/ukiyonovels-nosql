import React, { ReactElement } from 'react';
import { Settings } from 'react-slick';
import { heroBanner } from '../../../settings/config/settings.json';
import { SMALL } from '../../../settings/media';
import { DEFAULT_SLIDER_SETTINGS } from '../../../utilities/slider';
import * as S from './style';
import { truncate } from '../../../utilities/string';

type Props = {
    className?: string;
}

const ImageCarousel: React.FC<Props> = (props: Props): ReactElement => {
    const { className } = props;

    const sliderOptions: Settings = {
        ...DEFAULT_SLIDER_SETTINGS,
        prevArrow: <S.Arrow />,
        nextArrow: <S.Arrow />,
        responsive: [
            {
                breakpoint: +SMALL.replace(/\D/g, ''),
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    };

    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <S.ImageCarouselContainer className={className}>
            <S.ImageCarouselSlider {...sliderOptions}>
                {heroBanner.items.map(props => {
                    const { mobileImage, desktopImage, headingText, description, buttonText, link } = props;

                    return (
                        <S.ImageCarouselSliderItem key={mobileImage + desktopImage}>
                            <S.ImageCarouselBackgroundImage src={desktopImage || mobileImage} alt="Hero Banner" />
                            <S.ImageCarouselMobileBackgroundImage src={mobileImage || desktopImage} alt="Hero Banner" />
                            <S.ImageCarouselContent>
                                <S.ImageCarouselHeading>{headingText}</S.ImageCarouselHeading>
                                <S.ImageCarouselSubtitle>{truncate(description, 130)}</S.ImageCarouselSubtitle>
                                <S.ImageCarouselLinkButton href={link}>
                                    <S.ImageCarouselBookButtonIcon /> {buttonText}
                                </S.ImageCarouselLinkButton>
                            </S.ImageCarouselContent>
                        </S.ImageCarouselSliderItem>
                    );
                })}
            </S.ImageCarouselSlider>
        </S.ImageCarouselContainer>
    );
    /* eslint-enable react/jsx-props-no-spreading */
};

export default ImageCarousel;
