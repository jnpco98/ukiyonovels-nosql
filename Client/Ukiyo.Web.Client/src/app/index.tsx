import React, { useState, useRef, useEffect, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContainer } from './style';
import { BaseTheme } from '../settings/theme';
import Text, { TextType } from '../components/atom/text';

const App: React.FC = (): ReactElement => {
    const [headerOffset, setHeaderOffset] = useState<string>('0');
    const navigationRef = useRef(document.createElement('div'));

    useEffect(() => {
        setHeaderOffset(`${navigationRef.current.getBoundingClientRect().bottom}px`);
    }, []);

    return (
        <ThemeProvider theme={BaseTheme}>
            <AppContainer>
                <Text type={TextType.SectionTitle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis aut eius rerum dicta nostrum,
                    possimus vero. Sint, numquam nam?
                </Text>
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
