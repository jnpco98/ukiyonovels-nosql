import React, { ReactElement, useState } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { AppContainer } from './style';
import { BaseTheme } from '../settings/theme';
import { navigation } from '../settings/settings.data.json';

// eslint-disable-next-line
import 'simplebar/dist/simplebar.min.css';
import DesktopMenu from '../components/molecule/menu';

const App: React.FC = (): ReactElement => {
    return (
        <ThemeProvider theme={BaseTheme}>
            <AppContainer>
                <DesktopMenu menuItems={navigation.items} />
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;

// const App: React.FC = (): ReactElement => {
//     const [hamburgerIdx, setHamburgerIdx] = useState(0);
//     // const [headerOffset, setHeaderOffset] = useState<string>('0');
//     // const navigationRef = useRef(document.createElement('div'));

//     // useEffect(() => {
//     //     setHeaderOffset(`${navigationRef.current.getBoundingClientRect().bottom}px`);
//     // }, []);

//     return (
//         <ThemeProvider theme={BaseTheme}>
//             <AppContainer style={{ margin: '2rem' }}>
//                 <Text type={TextType.PageTitle}>H1: Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
//                 <Text type={TextType.SectionTitle}>H2: Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
//                 <Text type={TextType.SubsectionTitle}>
//                     H3: Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 </Text>
//                 <Text type={TextType.Paragraph}>
//                     Paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 </Text>
//                 <Text type={TextType.Span}>Span: Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
//                 <Text type={TextType.Anchor}>Achor: Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
//                 <Icon
//                     glyph={GlyphType.LikeFill}
//                     message="99k"
//                     countColor="#7289DA"
//                     countBackground="#ffff"
//                     size="3rem"
//                     fill="#7289DA"
//                 />
//                 <Icon
//                     glyph={GlyphType.Calendar}
//                     message="99k"
//                     countColor="#7289DA"
//                     countBackground="#ffff"
//                     size="3rem"
//                     fill="#7289DA"
//                 />
//                 <div style={{ display: 'flex', margin: '2rem' }}>
//                     {[MenuType.NoEntry, MenuType.SpeedRunner, MenuType.Spread, MenuType.Tear].map((type, idx) => (
//                         /* eslint-disable */
//                         <div onClick={() => setHamburgerIdx(idx)}>
//                             <HamburgerMenu type={type} active={hamburgerIdx === idx} key={idx} />
//                         </div>
//                         /* eslint-enable */
//                     ))}
//                 </div>
//                 <Select
//                     optionName="genre"
//                     defaultValue="Select game genre"
//                     options={[
//                         { displayName: 'Action', value: 'action' },
//                         { displayName: 'Adventure', value: 'adventure' },
//                         { displayName: 'RPG', value: 'rpg' },
//                         { displayName: 'Simulation', value: 'simulation' },
//                         { displayName: 'Strategy', value: 'strategy' },
//                         { displayName: 'Sports', value: 'sports' },
//                         { displayName: 'Idle', value: 'idle' },
//                         { displayName: 'MMORPG', value: 'mmorpg' },
//                         { displayName: 'Casual', value: 'casual' }
//                     ]}
//                     onSelect={(o): void => {
//                         console.log(o);
//                     }}
//                 />
//                 <Icon
//                     glyph={GlyphType.Profile}
//                     countColor="#7289DA"
//                     countBackground="#ffff"
//                     size="3rem"
//                     fill="#7289DA"
//                 />
//                 <Bar width="10rem" height="0.5rem" rounded fillRate={0.5} />
//                 <div style={{ margin: '2rem' }}>
//                     <Search name="def" />
//                 </div>
//                 <div style={{ display: 'flex', margin: '2rem', justifyContent: 'space-between', minWidth: '22rem' }}>
//                     <Button type={ButtonType.Info}>button</Button>
//                     <Button type={ButtonType.Success}>button</Button>
//                     <Button type={ButtonType.Warning}>button</Button>
//                     <Button type={ButtonType.Error}>button</Button>
//                 </div>
//                 <Input name="inp" label="Name" />
//                 <div
//                     style={{
//                         display: 'flex',
//                         width: '100%',
//                         justifyContent: 'space-between',
//                         margin: '2rem',
//                         maxWidth: '40rem',
//                         flexWrap: 'wrap'
//                     }}
//                 >
//                     {[
//                         'https://assets3.thrillist.com/v1/image/2813543/size/gn-gift_guide_variable_c_2x.jpg',
//                         'http://novelfull.com/uploads/thumbs/library-of-heavens-path-d6292facbc-6d010b89b8fcb6a6cfa04853f099ea20.jpg',
//                         'http://novelfull.com/uploads/thumbs/martial-god-asura-4fbd99df7b-22fdb7e1b842e5705f8694f5d6d533ea.jpg'
//                     ].map(src => (
//                         <Thumbnail imgSrc={src} key={src}>
//                             Kono Tsubasa
//                         </Thumbnail>
//                     ))}
//                 </div>
//                 {[1, 2].map((n, idx) => (
//                     <>
//                         <Card
//                             key="s"
//                             title="Magic Industry Empire Ch.84"
//                             link="http://novelfull.com/uploads/thumbs/martial-god-asura-4fbd99df7b-22fdb7e1b842e5705f8694f5d6d533ea.jpg"
//                             imgSrc="http://novelfull.com/uploads/thumbs/martial-god-asura-4fbd99df7b-22fdb7e1b842e5705f8694f5d6d533ea.jpg"
//                         >
//                             <Text type={TextType.Paragraph}>
//                                 Although the students didn&apos;t reply her, but the blazing hope that shone in their
//                                 eyes, was filled with passion.&quot;You have eight months&apos; time, and in these eight
//                                 months, we will try all means and ways to train you.&quot; Ye Qing Luo&apos;s vision
//                                 fell lastly onto Qiao Jin, as a faint arc on her lips curle
//                             </Text>
//                         </Card>
//                         <div style={{ width: '100%', margin: '2rem' }} />
//                     </>
//                 ))}
//             </AppContainer>
//         </ThemeProvider>
//     );
// };

// export default App;
