import React, { ReactElement, Dispatch, useState } from 'react';
import { Settings } from 'react-slick';
import { SMALL } from '../../../settings/media';
import { DEFAULT_SLIDER_SETTINGS } from '../../../utilities/slider';
import * as S from './style';
import { truncate } from '../../../utilities/string';
import { useDispatch, useSelector } from 'react-redux';
import { NovelActionTypes } from '../../../store/novel/actionTypes';
import INovel from '../../../store/models/entities/Novel';
import { AppState } from '../../../store/rootReducer';

type HeroBannerContents = {
    mobileImage?: string;
    desktopImage: string;
    headingText?: string;
    description?: string;
    buttonText?: string;
    link?: string;
} | {
    mobileImage: string;
    desktopImage: string;
    headingText?: string;
    description?: string;
    buttonText?: string;
    link?: string;
}

type Props = {
    className?: string;
    contents?: HeroBannerContents[];
}

const ImageCarousel: React.FC<Props> = (props: Props): ReactElement => {
    const { className, contents } = props;

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

    const dispatch = useDispatch<Dispatch<NovelActionTypes>>();
    const novels = useSelector<AppState>(state => state.novel);

    const [ ctr, setCtr ] = useState(0);

    const a: INovel[]= [
        {
            title: `TEST REDUX ${ctr}`,
            handle: `test-redux-0`,
            description: '',
            tags: [],
            genres: [],
            origins: [],
            authors: [],
            artists: [],
            relatedNovels: [],
            associatedNames: [],
            mediaGallery: [],
            coverImage: [],
            lastModified: null
        }
    ]

    console.log(`redux_`, novels)


    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <S.ImageCarouselContainer className={className}>
            <S.ImageCarouselSlider {...sliderOptions}>
                {contents.map(content => {
                    const { mobileImage, desktopImage, headingText, description, buttonText, link } = content;

                    return (
                        <S.ImageCarouselSliderItem key={mobileImage + desktopImage}>
                            <S.ImageCarouselBackgroundImage src={desktopImage || mobileImage} alt="Hero Banner" />
                            <S.ImageCarouselMobileBackgroundImage src={mobileImage || desktopImage} alt="Hero Banner" />
                            <S.ImageCarouselContent>
                                {headingText && <S.ImageCarouselHeading>{headingText}</S.ImageCarouselHeading>}
                                {description && <S.ImageCarouselSubtitle>{truncate(description, 130)}</S.ImageCarouselSubtitle>}
                                {buttonText && 
                                    <S.ImageCarouselLinkButton onClick={() => {setCtr(ctr + 1);dispatch({ type: "SEARCH_NOVEL", payload: a })}} href={link}>
                                        <S.ImageCarouselBookButtonIcon /> {buttonText}
                                    </S.ImageCarouselLinkButton>
                                }
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
