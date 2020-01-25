import { regularFontSize, gutter, GUTTER_RIGHT, GUTTER_LEFT, ratioImage } from "../../../utilities/mixins";
import styled from "styled-components/macro";
import { SubsectionTitle, SectionTitle } from "../../atom/text/style";
import * as M from '../../../settings/media';
import { ClassificationsContainer } from "../../molecule/classifications/style";
import { DynamicHTMLContainer } from "../../molecule/dynamic-html/style";
import { AccordionContainer } from "../../molecule/accordion/style";
import SidePanel from "../../organism/side-panel";

export const NovelContainer = styled.div`
  margin-top: 4rem;
  max-width: ${({ theme, ...props }) => theme.maxScreenSize};

  ${M.MEDIA_XXSMALL} {
    margin-top: 5rem;
  }

  ${M.MEDIA_XSMALL} {
    margin-top: 6rem;
  }

  ${M.MEDIA_MEDIUM} {
    display: flex;
  }
  
  ${M.MEDIA_LARGE} {
    margin-top: 10rem;
  }

  ${M.MEDIA_XLARGE} {
    margin-top: 13rem;
  }
`;

export const NovelWrapper = styled.div`
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};

  ${M.MEDIA_MEDIUM} {
    padding-right: 0;
  }

  ${M.MEDIA_LARGE} {
    flex: 1;
  }
`;

export const NovelTitle = styled(SectionTitle).attrs({ as: 'h1' })`
  ${M.MEDIA_MEDIUM} {
    margin-bottom: 2.5rem;
  }
`;

export const NovelPortrait = styled.img`
`;

export const NovelPortraitWrapper = styled.div`
  ${ratioImage(NovelPortrait, '100%', '150%')};
  margin-bottom: 1.5rem;
`;

export const NovelContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${M.MEDIA_MEDIUM} {
    flex-direction: row;
  }
`;

export const NovelContent = styled.div`
  width: 100%;

  ${ClassificationsContainer}, 
  ${DynamicHTMLContainer}, 
  ${AccordionContainer} {
    margin-bottom: 1rem;
  }

  ${ClassificationsContainer} + ${AccordionContainer} {
    margin-top: 2rem;
  }

  & + & {
    margin-bottom: 2rem;
  }

  ${M.MEDIA_MEDIUM} {
    &:first-child {
      padding-right: 3rem;
      flex: 0.6;
    }

    & + & {
      padding-left: 0;
      flex: 1;
    }
  }
`;

export const NovelDescriptionHeading = styled(SubsectionTitle)`
  ${regularFontSize};

  width: 100%;
  margin-bottom: 0.5rem;

  ${M.MEDIA_MEDIUM} {
    margin-bottom: 0.75rem;
  }
`;

export const NovelTitleWrapper = styled.div`
  width: 100%;
`;

export const NovelSidePanel = styled(SidePanel)`
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};

  ${M.MEDIA_MEDIUM} {
    padding-left: 2rem;
    margin-top: 0.7rem;
  }

  ${M.MEDIA_LARGE} {
    padding-left: 6rem;
  }
  
  ${M.MEDIA_LARGE} {
    flex: 0.4;
  }
`