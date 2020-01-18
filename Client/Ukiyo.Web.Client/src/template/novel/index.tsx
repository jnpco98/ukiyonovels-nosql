import React, { ReactElement } from 'react';
import TypeList from '../../components/atom/type-list';
import NovelDetails from '../../components/atom/novel-details';
import * as S from './style';
import Text, { TextType } from '../../components/atom/text';
import DynamicHTML from '../../components/atom/dynamic-html';
import Accordion from '../../components/atom/accordion';

const title = "Martial God Asura";
const type = ["Chinese Novel"];
const genre = ["Adventure", "Action", "Ecchi", "Fantasy", "Harem", "Martial Arts", "Mature", "Romance", "Seinen", "Supernatural", "Xianxia"];
const tags = ["Battle Academy", "Bullying", "Comedic Undertone", "Fearless Male Lead", "Hot-blooded Male Lead", "Orphans", "Ranked by Strength", "Revenge", "Ruthless Male lead", "Special Abilities", "Strong Female Lead", "Strong Female Side Characters", "Strong Male Lead", "Sudden Power Growth", "Training", "Underestimated Male Lead", "Wars", "Weak to Strong"];
const language = ["Chinese"];
const author = ["Kindhearted Bee", "Shan Liang de Mi Feng"]
const artist = ["Kindhearted Bee", "Shan Liang de Mi Feng"];
const year = ["2002"];
const status = ["Ongoing"];
const altNames = ["Tu La Vũ Thần", "Xiuluo Wushen", "修罗武神", "修羅武神"];
const relatedSeries = ["A Martial Odyssey", "A Mistaken Marriage Match – A Generation of Military Counselor", "Absolute Duo", "Arifureta", "AntiMagic Academy “The 35th Test Platoon”"]
const description = "<p>Even if you have potential, it does not mean you are a genius. You can learn mysterious martial arts, and you can learn without a teacher.</p><p>Even if you have strength, despite having numerous precious treasures, you may not be able to defeat my spirit army.</p><p>Who am I? Every living thing in the world views me as Asura, but I didn’t know, so I became a martial god as Asura.</p>";

const generateClassification = (strs: string[]) => strs.map(str => ({ name: str, link: '#' }));

const content = [
    { heading: "Download Links", content: <NovelDetails details={generateClassification(tags)}/> }
]

const Novel: React.FC = (): ReactElement => {
    return(
        <>
            <S.NovelContent>
                <S.NovelTitle>{title}</S.NovelTitle>
                <S.NovelPortraitWrapper>
                    <S.NovelPortrait src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wirofBlPHzaENMu5RCxx9T2gNjB.jpg"/>
                </S.NovelPortraitWrapper>
            </S.NovelContent>

            <TypeList headingText="Type" classifications={generateClassification(type)}/>
            <TypeList headingText="Genre" classifications={generateClassification(genre)}/>
            <TypeList headingText="Tags" classifications={generateClassification(tags)}/>
            <NovelDetails headingText="Language" details={generateClassification(language)}/>
            <NovelDetails headingText="Author(s)" details={generateClassification(author)}/>
            <NovelDetails headingText="Artist(s)" details={generateClassification(artist)}/>
            <NovelDetails headingText="Year" details={generateClassification(year)}/>
            <NovelDetails headingText="Status" details={generateClassification(status)}/>

            <S.NovelContent>
                <S.NovelHeadingTitle>Description</S.NovelHeadingTitle>
                {description && <DynamicHTML HTMLString={description}/>}
            </S.NovelContent>

            <NovelDetails headingText="Alternative Names" details={generateClassification(altNames)}/>
            <NovelDetails headingText="Related Series" details={generateClassification(relatedSeries)}/>
            <NovelDetails headingText="You May Also Like" details={generateClassification(relatedSeries)}/>

            <Accordion accordionContent={content} />
        </>
    );
}

export default Novel;