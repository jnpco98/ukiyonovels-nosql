import React from 'react';
import * as S from './style';

const ratings = [1, 2, 3, 4, 5, 6, 7].map(_ => ({
    rating: Math.random(),
    title: 'Children of a Lesser God'
}));

const genres = [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Ecchi',
    'Fantasy',
    'Gender Bender',
    'Harem',
    'Historical',
    'Horror',
    'Josei',
    'Martial Arts',
    'Mature',
    'Mecha',
    'Mystery',
    'Psychological',
    'Romance',
    'School Life',
    'Sci-fi',
    'Seinen',
    'Shotacon',
    'Shoujo',
    'Shoujo Ai',
    'Shounen',
    'Shounen Ai',
    'Slice of Life',
    'Smut',
    'Sports',
    'Supernatural',
    'Tragedy',
    'Wuxia',
    'Xianxia',
    'Xuanhuan',
    'Yaoi',
    'Yuri'
];

const types = ['Web Novel', 'Light Novel', 'Chinese Novel', 'Korean Novel'];

type Props = {
    className?: string;
}

const SidePanel: React.FC<Props> = (props: Props) => {
    const { className } = props;

    return (
        <S.SidePanelContainer className={className}>
            <S.SidePanelRatings headingText="Popular Novels" contents={ratings} />
            <S.SidePanelQuickSearch
                headingText="Search by Genre"
                contents={genres.map(g => ({ title: g, count: Math.random() * 1000 }))}
            />
            <S.SidePanelQuickSearch
                headingText="Search by Type"
                contents={types.map(t => ({ title: t, count: Math.random() * 1000 }))}
            />
        </S.SidePanelContainer>
    );
};

export default SidePanel;
