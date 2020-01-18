import React, { ReactElement } from 'react';
import InfoCardList from '../../components/molecule/card-list';
import RatingList from '../../components/molecule/rating-list';
import QuickSearch from '../../components/molecule/quicksearch';

const infoCardContent = [
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    }
];

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

const LatestUpdates: React.FC = (): ReactElement => {
    return (
        <>
            <InfoCardList content={infoCardContent} headingText="Latest Updates" />

            <RatingList headingText="Popular Novels" contents={ratings} />
            <QuickSearch
                headingText="Search by Genre"
                contents={genres.map(g => ({ title: g, count: Math.random() * 1000 }))}
            />
        </>
    );
};

export default LatestUpdates;