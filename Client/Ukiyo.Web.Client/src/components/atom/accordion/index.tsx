import React, { ReactElement } from 'react';
import * as S from './style';
import Text, { TextType } from '../text';

type Props = {
    multiple?: boolean;
    accordionContent?: {
        heading: string;
        content: React.ReactNode;
        uniqueId: string;
    }[];
};

const Accordion: React.FC<Props> = (props: Props): ReactElement => {
    const { accordionContent, multiple = true } = props;

    return (
        <S.AccordionContainer>
            <S.AccordionTabs>
                <S.AccordionTab>
                    <S.AccordionTabTrigger id="test" name="test" type={multiple ? "checkbox" : "radio"}/>
                    <S.AccordionTabLabel for="test" >Label</S.AccordionTabLabel>
                    <S.AccordionContent>Content</S.AccordionContent>
                </S.AccordionTab>
                <S.AccordionTab>
                    <S.AccordionTabTrigger id="test1" name="test" type={multiple ? "checkbox" : "radio"}/>
                    <S.AccordionTabLabel for="test1" >Label1</S.AccordionTabLabel>
                    <S.AccordionContent>Content1</S.AccordionContent>
                </S.AccordionTab>
            </S.AccordionTabs>
        </S.AccordionContainer>
    );
};

export default Accordion;
