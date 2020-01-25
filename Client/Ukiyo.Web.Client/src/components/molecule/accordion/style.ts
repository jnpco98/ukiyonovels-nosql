import styled from 'styled-components/macro';
import { SubsectionTitle } from '../../atom/text/style';
import { regularFontSize } from '../../../utilities/mixins';
import * as M from '../../../settings/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const AccordionContainer = styled.div`
  width: 100%;
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
  margin: 0;

  ${M.MEDIA_SMALL} {
    margin: 0;
  }

  ${M.MEDIA_MEDIUM} {
    margin: 0;
  }
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
      padding: 1rem;
    }
  }
`;