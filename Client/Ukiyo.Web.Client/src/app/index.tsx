import React, { ReactElement, useState } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { AppContainer } from './style';
import { BaseTheme } from '../settings/theme';
import { navigation } from '../settings/config/settings.json';

// eslint-disable-next-line
import 'simplebar/dist/simplebar.min.css';
import NavigationMenu from '../components/molecule/menu';
import HeroBanner from '../components/molecule/image-carousel';
import CardCarousel from '../components/molecule/info-thumbnail-carousel';
import InfoCardList from '../components/molecule/card-list';
import RatingList from '../components/molecule/rating-list';
import QuickSearch from '../components/molecule/quicksearch';

import NovelList from '../components/molecule/novel-list';
import Home from '../pages/home';
import List from '../pages/list';
import LatestUpdates from '../pages/latest-updates';


const App: React.FC = (): ReactElement => {
    return (
        <ThemeProvider theme={BaseTheme}>
            <AppContainer>
                <NavigationMenu menuItems={navigation.items} />
                {/* <Home/> */}
                {/* <List/> */}
                <LatestUpdates/>
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
