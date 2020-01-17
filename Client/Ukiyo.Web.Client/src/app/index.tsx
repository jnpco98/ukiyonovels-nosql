import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { AppContainer } from './style';
import { BaseTheme } from '../settings/theme';
import { navigation, copyright, privacy, termsOfService } from '../settings/config/settings.json';

// eslint-disable-next-line
import 'simplebar/dist/simplebar.min.css';
import NavigationMenu from '../components/molecule/menu';

import Home from '../template/home';
import Novels from '../template/novels';
import LatestUpdates from '../template/latest-updates';
import StandardPage from '../template/standard';
import TypeList from '../components/atom/type-list';

const classifications = [
    { name: "Adventure", link: "#" },
    { name: "Action", link: "#" },
    { name: "Ecchi", link: "#" },
    { name: "Fantasy", link: "#" },
    { name: "Harem", link: "#" },
    { name: "Martial Arts", link: "#" },
    { name: "Mature", link: "#" },
    { name: "Romance", link: "#" },
    { name: "Seinen", link: "#" },
    { name: "Supernatural", link: "#" },
    { name: "Xianxia", link: "#" },
]

const App: React.FC = (): ReactElement => {
    return (
        <ThemeProvider theme={BaseTheme}>
            <AppContainer>
                <NavigationMenu menuItems={navigation.items} />
                {/* <Home/>
                <Novels/> 
                <LatestUpdates/>
                <StandardPage pageHeading={copyright.pageHeading} pageText={copyright.pageText}/>
                <StandardPage pageHeading={privacy.pageHeading} pageText={privacy.pageText} contents={privacy.contents}/>
                <StandardPage pageHeading={termsOfService.pageHeading} pageText={termsOfService.pageText} contents={termsOfService.contents} /> */}
                <TypeList headingText="Genre" classifications={classifications}/>
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
