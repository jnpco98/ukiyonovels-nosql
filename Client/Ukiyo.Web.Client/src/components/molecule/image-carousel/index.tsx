import React, { ReactElement } from 'react';
import { Settings } from 'react-slick';
import { heroBanner } from '../../../settings/config/settings.json';
import { SMALL } from '../../../settings/media';
import { DEFAULT_SLIDER_SETTINGS } from '../../../utilities/slider';
import * as S from './style';
import { truncate } from '../../../utilities/string';

const HeroBanner: React.FC = (): ReactElement => {
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
        <S.Container>
            <S.Slider {...sliderOptions}>
                {heroBanner.items.map(props => {
                    const { mobileImage, desktopImage, headingText, description, buttonText, link } = props;

                    return (
                        <S.SliderItem key={mobileImage + desktopImage}>
                            <S.BackgroundImage src={desktopImage || mobileImage} alt="Hero Banner" />
                            <S.MobileBackgroundImage src={mobileImage || desktopImage} alt="Hero Banner" />
                            <S.Content>
                                <S.Heading>{headingText}</S.Heading>
                                <S.Subtitle>{truncate(description, 130)}</S.Subtitle>
                                <S.LinkButton href={link}>
                                    <S.BookButtonIcon /> {buttonText}
                                </S.LinkButton>
                            </S.Content>
                        </S.SliderItem>
                    );
                })}
            </S.Slider>
        </S.Container>
    );
    /* eslint-enable react/jsx-props-no-spreading */
};

export default HeroBanner;
