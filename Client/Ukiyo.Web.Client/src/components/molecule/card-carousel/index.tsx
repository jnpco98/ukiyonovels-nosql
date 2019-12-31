import React, { ReactElement } from 'react';
import { Settings } from 'react-slick';
import Card from '../../atom/card';
import * as S from './style';
import { DEFAULT_SLIDER_SETTINGS } from '../../../utilities/slider';
import { SMALL, XXSMALL, XSMALL } from '../../../settings/media';

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
        swipeToSlide: true,
        prevArrow: <S.Arrow />,
        nextArrow: <S.Arrow />,
        variableWidth: true,
        centerMode: true
    };

    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <S.Container>
            {/* <h2 style={{ color: 'white', margin: '2rem' }}>Latest Releases</h2> */}
            <S.Slider {...sliderOptions}>
                {content.map(({ heading, subtitle, genre, link, image }) => (
                    <S.Item
                        key={heading + subtitle}
                        heading={heading}
                        subtitle={subtitle}
                        genre={genre}
                        link={link}
                        image={image}
                    />
                ))}
            </S.Slider>
        </S.Container>
    );
    /* eslint-enable react/jsx-props-no-spreading */
};

export default CardCarousel;
