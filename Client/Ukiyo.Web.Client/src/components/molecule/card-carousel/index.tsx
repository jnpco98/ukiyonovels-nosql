import React, { ReactElement } from 'react';
import { Settings } from 'react-slick';
import Card from '../../atom/card';
import * as S from './style';
import { DEFAULT_SLIDER_SETTINGS } from '../../../utilities/slider';
import { SMALL } from '../../../settings/media';

type Props = {
    content: {
        heading: string;
        subtitle: string;
        genre: string;
        link: string;
        image: string;
    }[];
};

const CardCarousel: React.FC<Props> = (props: Props): ReactElement => {
    const { content } = props;

    const sliderOptions: Settings = {
        ...DEFAULT_SLIDER_SETTINGS,
        slidesToShow: 3,
        swipeToSlide: true,
        centerMode: true,
        prevArrow: <S.Arrow />,
        nextArrow: <S.Arrow />,
        responsive: [
            {
                breakpoint: +SMALL.replace(/\D/g, ''),
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 3,
                    centerMode: false
                }
            }
        ]
    };

    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <S.Container>
            <S.Slider {...sliderOptions}>
                {content.map(({ heading, subtitle, genre, link, image }) => (
                    <S.ItemWrapper className="wrapper" key={heading + subtitle}>
                        <S.Item
                            key={heading + subtitle}
                            heading={heading}
                            subtitle={subtitle}
                            genre={genre}
                            link={link}
                            image={image}
                        />
                    </S.ItemWrapper>
                ))}
            </S.Slider>
        </S.Container>
    );
    /* eslint-enable react/jsx-props-no-spreading */
};

export default CardCarousel;
