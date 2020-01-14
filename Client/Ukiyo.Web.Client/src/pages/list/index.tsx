import React, { ReactElement } from 'react';
import QuickSearch from '../../components/molecule/quicksearch';
import NovelList from '../../components/molecule/novel-list';
import RatingList from '../../components/molecule/rating-list';

const ratings = [1, 2, 3, 4, 5, 6, 7].map(_ => ({
    rating: Math.random(),
    title: 'Children of a Lesser God'
}));

const novels = [
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
]

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

const List: React.FC = (): ReactElement => {
    return (
        <>
            <NovelList headingText="Novel List" contents={[...novels, ...novels, ...novels]}/>

            <QuickSearch
                headingText="Search by Type"
                contents={genres.map(g => ({ title: g, count: Math.random() * 1000 }))}
            />
            
            <RatingList headingText="Popular Novels" contents={ratings} />
        </>
    );
};

export default List;
