import React from 'react';
import Accordion from '../../molecule/accordion';
import Classifications from '../../molecule/classifications';
import * as S from './style';

const genre = ["Adventure", "Action", "Fantasy", "Martial Arts", "Mature", "Romance", "Seinen", "Supernatural", "Xianxia", "Adventure", "Action", "Fantasy", "Martial Arts", "Mature", "Romance", "Seinen", "Supernatural", "Xianxia"];
const classification = ["Light novel", "Web novel"];
const status = ['Complete', 'Ongoing', 'Hiatus'];

const generateLink = (strs: string[]) => strs.map(str => ({ name: str, link: '#' }));

const content = [
    { heading: "Genre", content: <Classifications classifications={generateLink(genre)}/> },
    { heading: "Novel Type", content: <Classifications classifications={generateLink(classification)}/> },
    { heading: "Status", content: <Classifications classifications={generateLink(status)}/> }, 
]

const Footer = () => {
    return (
        <S.FooterContainer>
            <S.FooterSearchLinks>
                <S.FooterSearchLinksAccordion accordionContent={content} initialOpen={false}/>
            </S.FooterSearchLinks>
        </S.FooterContainer>
    );
};

export default Footer;