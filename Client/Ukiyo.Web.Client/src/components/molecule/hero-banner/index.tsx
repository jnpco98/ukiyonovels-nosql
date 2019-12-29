import React, { ReactElement } from 'react';
import Slider, { Settings } from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import Text, { TextType } from '../../atom/text';
import { heroBanner } from '../../../settings/settings.data.json';
import { SMALL } from '../../../settings/media';
import { DEFAULT_SLIDER_SETTINGS } from '../../../utilities/slider';

const HeroBanner: React.FC = (): ReactElement => {
    const sliderOptions: Settings = {
        ...DEFAULT_SLIDER_SETTINGS,
        responsive: [
            {
                breakpoint: +SMALL.replace(/\D/g, ''),
                settings: {
                    dots: true
                }
            }
        ]
    };

    const isSmallScreen = useMediaQuery({ minWidth: SMALL });

    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <div style={{ width: '100%' }}>
            <Slider {...sliderOptions}>
                {heroBanner.items.map(props => {
                    const { mobileImage, desktopImage, headingText, description, buttonText, link } = props;

                    return (
                        <a style={{ width: '10rem', height: '10rem' }} key={mobileImage + desktopImage} href={link}>
                            <img
                                style={{ margin: 'auto' }}
                                src={isSmallScreen && mobileImage ? mobileImage : desktopImage}
                                alt="Hero Banner"
                            />
                            <Text textType={TextType.SubsectionTitle}>{headingText}</Text>
                            <Text textType={TextType.Paragraph}>{description}</Text>
                        </a>
                    );
                })}
            </Slider>
        </div>
    );
    /* eslint-enable react/jsx-props-no-spreading */
};

export default HeroBanner;
