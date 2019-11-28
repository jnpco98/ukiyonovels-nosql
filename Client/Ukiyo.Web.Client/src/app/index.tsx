import React, { useState, useRef, useEffect, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContainer } from './style';
import { BaseTheme } from '../settings/theme';
import Text, { TextType } from '../components/atom/text';
import Icon from '../components/atom/icon';
import Bar from '../components/atom/bar';
import { GlyphType } from '../components/atom/icon/glyph';

const App: React.FC = (): ReactElement => {
    const [headerOffset, setHeaderOffset] = useState<string>('0');
    const navigationRef = useRef(document.createElement('div'));

    useEffect(() => {
        setHeaderOffset(`${navigationRef.current.getBoundingClientRect().bottom}px`);
    }, []);

    return (
        <ThemeProvider theme={BaseTheme}>
            <AppContainer>
                <Text type={TextType.PageTitle}>H1: Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                <Text type={TextType.SectionTitle}>H2: Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                <Text type={TextType.SubsectionTitle}>
                    H3: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
                <Text type={TextType.Paragraph}>
                    Paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
                <Text type={TextType.Span}>Span: Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                <Text type={TextType.Anchor}>Achor: Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                <Icon
                    glyph={GlyphType.LikeFill}
                    message="99k"
                    countColor="#7289DA"
                    countBackground="#ffff"
                    size="3rem"
                    fill="#7289DA"
                />
                <Bar width="10rem" height="0.5rem" rounded fillRate={0.5} />
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
