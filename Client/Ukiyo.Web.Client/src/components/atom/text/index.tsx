import React, { ReactElement } from 'react';
import { AnyStyledComponent } from 'styled-components/macro';
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
    children?: React.ReactNode;
    textType?: TextType;
} & React.HTMLProps<HTMLAnchorElement>;

const Text: React.FC<Props> = (props: Props): ReactElement => {
    const { children = '', className = '', textType, href, onClick } = props;

    let StyledText: AnyStyledComponent;

    switch (textType) {
        case TextType.PageTitle:
            StyledText = S.PageTitle;
            break;
        case TextType.SectionTitle:
            StyledText = S.SectionTitle;
            break;
        case TextType.SubsectionTitle:
            StyledText = S.SubsectionTitle;
            break;
        default:
        case TextType.Paragraph:
            StyledText = S.Paragraph;
            break;
        case TextType.Span:
            StyledText = S.Span;
            break;
        case TextType.Anchor:
            StyledText = S.Anchor;
            break;
    }

    return (
        <StyledText href={href} className={className} onClick={onClick} >
            {children}
        </StyledText>
    );
};

export default Text;
