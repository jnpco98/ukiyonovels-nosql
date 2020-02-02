import React, { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components/macro';
import { AppContainer } from './style';
import { BaseTheme } from '../settings/theme';
import { navigation, copyright, privacy, termsOfService } from '../settings/config/settings.json';

import Header from '../components/organism/header';

import Home from '../components/template/home';
import LatestUpdates from '../components/template/latest-updates';

import Novel from '../components/template/novel';
import StandardPage from '../components/template/standard';
import Novels from '../components/template/novels';
import PageNotFound from '../components/template/404';
import SearchPage from '../components/template/search';
import Contact from '../components/template/contact';
import Footer from '../components/organism/footer';

const App: React.FC = (): ReactElement => {

    return (
        <ThemeProvider theme={BaseTheme}>
            <AppContainer>
                <Header mainMenuItems={navigation.mainMenu} sideMenuItems={navigation.sidenavMenu}/>
                <Home/>
                <Novel/>
                <Novels/> 
                <LatestUpdates/>
                <SearchPage/>
                <StandardPage pageHeading={copyright.pageHeading} pageText={copyright.pageText}/>
                <StandardPage pageHeading={privacy.pageHeading} pageText={privacy.pageText} contents={privacy.contents}/>
                <StandardPage pageHeading={termsOfService.pageHeading} pageText={termsOfService.pageText} contents={termsOfService.contents} /> 
                <PageNotFound />
                <Contact/>
                <Footer/>
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;


{/* 
    import Loader, { LoaderType } from '../components/atom/loaders';
    <Loader type={LoaderType.Ring} />
    <Loader type={LoaderType.DualRing} />
    <Loader type={LoaderType.Ellipsis} /> 
*/}