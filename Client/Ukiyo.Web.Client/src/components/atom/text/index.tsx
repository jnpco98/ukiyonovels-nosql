import React, { ReactElement } from 'react';
import * as S from './style';

export enum TextType {
    PageTitle,
    SectionTitle,
    SubsectionTitle,
    Paragraph,
    Span,
    Anchor
}

type Props = {
    className?: string;
    children: React.ReactNode;
    type?: TextType;
};

const Text: React.FC<Props> = (props: Props): ReactElement => {
    const { children = '', className = '', type } = props;

    let StyledText;

    switch (type) {
        case TextType.PageTitle:
            StyledText = S.PageTitle;
            break;
        case TextType.SectionTitle:
            StyledText = S.SectionTitle;
            break;
        case TextType.SubsectionTitle:
            StyledText = S.SubsectionTitle;
            break;
        case TextType.Paragraph:
            StyledText = S.Paragraph;
            break;
        case TextType.Span:
            StyledText = S.Span;
            break;
        case TextType.Anchor:
            StyledText = S.Anchor;
            break;
        default:
            StyledText = S.Paragraph;
            break;
    }

    return <StyledText className={className}>{{ children }}</StyledText>;
};

export default Text;