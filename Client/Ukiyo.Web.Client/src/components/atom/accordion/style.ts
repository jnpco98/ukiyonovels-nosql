import styled from 'styled-components/macro';
import { SubsectionTitle } from '../text/style';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT, regularFontSize } from '../../../utilities/mixins';
import * as M from '../../../settings/media';
import { margin } from 'polished';

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
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0,0,0,0.5);
`;

export const AccordionTab = styled.div`
  width: 100%;
  color: white;
  overflow: hidden;
`;

type LabelStyleProps = {
  for: string;
}

export const AccordionTabLabel = styled.label<LabelStyleProps>`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: black;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: greenyellow;
  }

  &:after {
    content: ">";
    width: 1rem;
    height: 1rem;
    text-align: center;
    transition: all .25s;
  }
`;

export const AccordionContent = styled.div`
  max-height: 0;
  padding: 0 1rem;
  color: black;
  background: white;
  transition: all .25s;
`;

export const AccordionTabTrigger = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked {
    + ${AccordionTabLabel} {
      background: greenyellow;

      &:after {
        transform: rotate(90deg);
      }
    }

    ~ ${AccordionContent} {
      max-height: 30rem;
      padding: 1rem;
    }
  }
`;