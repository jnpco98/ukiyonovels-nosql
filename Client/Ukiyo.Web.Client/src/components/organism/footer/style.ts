import styled from 'styled-components';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT } from '../../../utilities/mixins';
import Accordion from '../../molecule/accordion';
import { AccordionContainer, AccordionTabLabel } from '../../molecule/accordion/style';

export const FooterContainer = styled.div`
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};
  padding-top: 1rem;
  width: 100%;
  background: ${({ theme, ...props }) => theme.colors.white};
`;

export const FooterSearchLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FooterSearchLinksAccordion = styled(Accordion).attrs({ flat: true })`
`;