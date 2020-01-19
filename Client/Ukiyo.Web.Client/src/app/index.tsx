import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { AppContainer } from './style';
import { BaseTheme } from '../settings/theme';
import { navigation, copyright, privacy, termsOfService } from '../settings/config/settings.json';

// eslint-disable-next-line
import 'simplebar/dist/simplebar.min.css';
import Header from '../components/organism/header';

import Home from '../template/home';
import Novels from '../template/novels';
import LatestUpdates from '../template/latest-updates';
import StandardPage from '../template/standard';
import Novel from '../template/novel';
import PageNotFound from '../template/404';
import SearchPage from '../template/search';
import Search from '../components/atom/search';
import Select from '../components/atom/select';


const App: React.FC = (): ReactElement => {
    return (
        <ThemeProvider theme={BaseTheme}>
            <AppContainer>
                <Header menuItems={navigation.items} />
                {/* <Home/>
                <Novel/>
                <Novels/> 
                <LatestUpdates/>
                <SearchPage/>
                <StandardPage pageHeading={copyright.pageHeading} pageText={copyright.pageText}/>
                <StandardPage pageHeading={privacy.pageHeading} pageText={privacy.pageText} contents={privacy.contents}/>
                <StandardPage pageHeading={termsOfService.pageHeading} pageText={termsOfService.pageText} contents={termsOfService.contents} /> 
                <PageNotFound />*/}
                <Novel/>
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
