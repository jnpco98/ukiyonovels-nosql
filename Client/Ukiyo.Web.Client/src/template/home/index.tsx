import React, { ReactElement } from 'react';
import ImageCarousel from '../../components/organism/image-carousel';
import InfoThumbnailCarousel from '../../components/organism/info-thumbnail-carousel';
import InfoCardList from '../../components/organism/info-card-list';
import RatingList from '../../components/organism/rating-list';
import QuickSearch from '../../components/organism/quick-search';

const cardContent = [
    {
        link: '#',
        image:
            'http://novelfull.com/uploads/thumbs/arifureta-shokugyou-de-sekai-sai-df6361a046-82e989d5c74293e092dafcbbfeb6c764.jpeg',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Arifureta Shokugyō de Sekai Saikyō Sekai Saikyō',
        subtitle: 'Web Novel'
    },
    {
        link: '#',
        image: 'https://i.pinimg.com/564x/3a/06/53/3a0653ffca6355d259b1ffdfb9404755.jpg',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Arifureta Shokugyō de Sekai Saikyō',
        subtitle: 'Web Novel'
    },
    {
        link: '#',
        image:
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90b4db6e-3d5e-4236-8250-a9a6fef0ef4a/da52i0d-32dfd32b-e5a0-40d5-85e7-6a92d5028401.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkwYjRkYjZlLTNkNWUtNDIzNi04MjUwLWE5YTZmZWYwZWY0YVwvZGE1MmkwZC0zMmRmZDMyYi1lNWEwLTQwZDUtODVlNy02YTkyZDUwMjg0MDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nNpNuqt2PvnzmidHV0atbsBuMOGSotW5l7u9ZeS56fE',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Cross Ange',
        subtitle: 'Web Novel'
    },
    {
        link: '#',
        image: 'https://cdn.myanimelist.net/images/anime/1694/93337l.jpg',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Tensei shitara Slime Datta Ken',
        subtitle: 'Web Novel'
    },
    {
        link: '#',
        image:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Death March to the Parallel World Rhapsody',
        subtitle: 'Web Novel'
    },
    {
        link: '#',
        image: 'https://i.pinimg.com/564x/3a/06/53/3a0653ffca6355d259b1ffdfb9404755.jpg',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Arifureta Shokugyō de Sekai Saikyō',
        subtitle: 'Web Novel'
    },
    {
        link: '#',
        image:
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90b4db6e-3d5e-4236-8250-a9a6fef0ef4a/da52i0d-32dfd32b-e5a0-40d5-85e7-6a92d5028401.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkwYjRkYjZlLTNkNWUtNDIzNi04MjUwLWE5YTZmZWYwZWY0YVwvZGE1MmkwZC0zMmRmZDMyYi1lNWEwLTQwZDUtODVlNy02YTkyZDUwMjg0MDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nNpNuqt2PvnzmidHV0atbsBuMOGSotW5l7u9ZeS56fE',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Cross Ange',
        subtitle: 'Web Novel'
    },
    {
        link: '#',
        image: 'https://cdn.myanimelist.net/images/anime/1694/93337l.jpg',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Tensei shitara Slime Datta Ken',
        subtitle: 'Web Novel'
    },
    {
        link: '#',
        image:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Death March to the Parallel World Rhapsody',
        subtitle: 'Web Novel'
    },
    {
        link: '#',
        image: 'https://i.pinimg.com/564x/3a/06/53/3a0653ffca6355d259b1ffdfb9404755.jpg',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Arifureta Shokugyō de Sekai Saikyō',
        subtitle: 'Web Novel'
    },
    {
        link: '#',
        image:
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90b4db6e-3d5e-4236-8250-a9a6fef0ef4a/da52i0d-32dfd32b-e5a0-40d5-85e7-6a92d5028401.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkwYjRkYjZlLTNkNWUtNDIzNi04MjUwLWE5YTZmZWYwZWY0YVwvZGE1MmkwZC0zMmRmZDMyYi1lNWEwLTQwZDUtODVlNy02YTkyZDUwMjg0MDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nNpNuqt2PvnzmidHV0atbsBuMOGSotW5l7u9ZeS56fE',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Cross Ange',
        subtitle: 'Web Novel'
    },
    {
        link: '#',
        image: 'https://cdn.myanimelist.net/images/anime/1694/93337l.jpg',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Tensei shitara Slime Datta Ken',
        subtitle: 'Web Novel'
    },
    {
        link: '#',
        image:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Death March to the Parallel World Rhapsody',
        subtitle: 'Web Novel'
    },
    {
        link: '#',
        image:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Death March to the Parallel World Rhapsody',
        subtitle: 'Web Novel'
    },
    {
        link: '#',
        image:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Death March to the Parallel World Rhapsody',
        subtitle: 'Web Novel'
    },
    {
        link: '#',
        image:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        genre: 'Action, Adventure, Ecchi, Fantasy, Romance, Shounen',
        heading: 'Death March to the Parallel World Rhapsody',
        subtitle: 'Web Novel'
    }
];

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

const types = ['Web Novel', 'Light Novel', 'Chinese Novel', 'Korean Novel'];

const novels = [
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
]

const Home: React.FC = (): ReactElement => {
    return (
        <>
            <ImageCarousel />
            <InfoThumbnailCarousel content={cardContent} headingText="Featured Novels" />
            <InfoCardList content={infoCardContent} headingText="Latest Release" />
            <RatingList headingText="Popular Novels" contents={ratings} />
            <QuickSearch
                headingText="Search by Genre"
                contents={genres.map(g => ({ title: g, count: Math.random() * 1000 }))}
            />
            <QuickSearch
                headingText="Search by Type"
                contents={types.map(t => ({ title: t, count: Math.random() * 1000 }))}
            />
        </>
    );
};

export default Home;
