import React, { ReactElement } from 'react';
import * as S from './style';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
    multiple?: boolean;
    accordionContent: {
        heading: string;
        content: React.ReactNode;
    }[];
};

const Accordion: React.FC<Props> = (props: Props): ReactElement => {
    const { accordionContent, multiple = true } = props;

    return (
        <S.AccordionContainer>
            <S.AccordionTabs>
                {
                    accordionContent.map(ac => 
                        <S.AccordionTab>
                            <S.AccordionTabTrigger id={ac.heading} name={ac.heading} type={multiple ? "checkbox" : "radio"}/>
                            <S.AccordionTabLabel for={ac.heading} >
                            <S.AccordionTabLabelText>{ac.heading}</S.AccordionTabLabelText>
                                <S.AccordionTabLabelIcon icon={faArrowCircleRight}/>
                            </S.AccordionTabLabel>
                        <S.AccordionContent>{ac.content}</S.AccordionContent>
                        </S.AccordionTab>
                    )
                }

            </S.AccordionTabs>
        </S.AccordionContainer>
    );
};

export default Accordion;
