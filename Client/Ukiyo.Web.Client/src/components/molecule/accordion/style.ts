import styled from 'styled-components/macro';
import { SubsectionTitle } from '../../atom/text/style';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT, regularFontSize } from '../../../utilities/mixins';
import * as M from '../../../settings/media';
import { margin } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const AccordionContainer = styled.div`
  width: 100%;
  margin: 0.65rem 0;

  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};

  ${M.MEDIA_XSMALL} {
    ${margin('1rem', null, '1rem', null)};
  }

  ${M.MEDIA_SMALL} {
    ${margin('1.5rem', null, '1.5rem', null)};
  }
`;

export const AccordionTabs = styled.div`
  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0,0,0,0.5);
`;

export const AccordionTab = styled.div`
  width: 100%;
  color: ${({ theme, ...props }) => theme.colors.background};
  overflow: hidden;
`;

type LabelStyleProps = {
  for: string;
}

export const AccordionTabLabel = styled.label<LabelStyleProps>`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: ${({ theme, ...props }) => theme.colors.accent};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${({ theme, ...props }) => theme.colors.accent};
  }
`;

export const AccordionTabLabelText = styled(SubsectionTitle)`
  ${regularFontSize};
`;

export const AccordionTabLabelIcon = styled(FontAwesomeIcon).attrs({ icon: faArrowRight })`
  font-size: 0.7rem;
  transition: all 0.3s ease;
`;

export const AccordionContent = styled.div`
  max-height: 0;
  color: black;
  background: ${({ theme, ...props }) => theme.colors.white};
  transition: all .25s;
  overflow: hidden;
`;

export const AccordionTabTrigger = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked {
    + ${AccordionTabLabel} {
      background: ${({ theme, ...props }) => theme.colors.accent};

      ${AccordionTabLabelIcon} {
        transform: rotate(90deg);
      }
    }

    ~ ${AccordionContent} {
      max-height: 30rem;
      padding: 0.3rem 0;
    }
  }
`;