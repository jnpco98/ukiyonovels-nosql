import React, { ReactElement, useState } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { AppContainer } from './style';
import { BaseTheme } from '../settings/theme';
import { navigation, copyright } from '../settings/config/settings.json';

// eslint-disable-next-line
import 'simplebar/dist/simplebar.min.css';
import NavigationMenu from '../components/molecule/menu';

import NovelList from '../components/molecule/novel-list';
import Home from '../template/home';
import List from '../template/list';
import LatestUpdates from '../template/latest-updates';
import StandardPage from '../template/standard';

const App: React.FC = (): ReactElement => {
    return (
        <ThemeProvider theme={BaseTheme}>
            <AppContainer>
                <NavigationMenu menuItems={navigation.items} />
                <Home/>
                <List/>
                <LatestUpdates/>
                <StandardPage pageHeading={copyright.pageHeading} pageText={copyright.pageText} contents={copyright.contents}/>
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
