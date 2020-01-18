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
import Novel from '../template/novel';
import Accordion from '../components/atom/accordion';


const App: React.FC = (): ReactElement => {
    return (
        <ThemeProvider theme={BaseTheme}>
            <AppContainer>
                <NavigationMenu menuItems={navigation.items} />
                {/* <Home/>
                <Novel/>
                <Novels/> 
                <LatestUpdates/>
                <StandardPage pageHeading={copyright.pageHeading} pageText={copyright.pageText}/>
                <StandardPage pageHeading={privacy.pageHeading} pageText={privacy.pageText} contents={privacy.contents}/>
                <StandardPage pageHeading={termsOfService.pageHeading} pageText={termsOfService.pageText} contents={termsOfService.contents} /> */}
                <Novel/>
                <Accordion multiple={false} />
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
