import React, { ReactElement } from 'react';
import { Settings } from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import * as S from './style';
import { DEFAULT_SLIDER_SETTINGS } from '../../../utilities/slider';
import { MEDIUM } from '../../../settings/media';

type Props = {
    content: {
        heading: string;
        subtitle: string;
        genre: string;
        link: string;
        image: string;
    }[];
    headingText?: string;
};

const CardCarousel: React.FC<Props> = (props: Props): ReactElement => {
    const { content, headingText } = props;

    const isDesktopScreen = useMediaQuery({ minWidth: MEDIUM });

    const sliderOptions: Settings = {
        responsive: [
            {
                breakpoint: +MEDIUM.replace(/\D/g, ''),
                settings: {
                    ...DEFAULT_SLIDER_SETTINGS,
                    swipeToSlide: true,
                    prevArrow: <S.Arrow />,
                    nextArrow: <S.Arrow />,
                    variableWidth: true,
                    centerMode: true
                }
            }
        ]
    };

    const generateCardContent = (start: number, last: number): React.ReactNode =>
        content
            .filter((c, idx) => idx >= start && idx < last)
            .map(({ heading, subtitle, genre, link, image }, idx, filtered) => (
                <S.Item
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
        <S.Container>
            {headingText && <S.SectionHeading>{headingText}</S.SectionHeading>}
            {isDesktopScreen ? (
                <S.FlexContainer>{generateCardContent(0, content.length)}</S.FlexContainer>
            ) : (
                <S.Slider {...sliderOptions}>{generateCardContent(0, content.length)}</S.Slider>
            )}
        </S.Container>
    );
    /* eslint-enable react/jsx-props-no-spreading */
};

export default CardCarousel;
