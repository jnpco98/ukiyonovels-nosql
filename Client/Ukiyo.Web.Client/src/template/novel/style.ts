import { regularFontSize, gutter, GUTTER_RIGHT, GUTTER_LEFT } from "../../utilities/mixins";
import styled from "styled-components";
import { SubsectionTitle, SectionTitle } from "../../components/atom/text/style";
import * as M from '../../settings/media';
import { margin } from "polished";

export const NovelPortraitWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 150%;
`;

export const NovelPortrait = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
`;

export const NovelContent = styled.div`
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

export const NovelHeadingTitle = styled(SubsectionTitle)`
  ${regularFontSize};
  margin-bottom: 0.5rem;

  ${M.MEDIA_SMALL} {
    margin-bottom: 0.75rem;
  }
`;

export const NovelTitle = styled(SectionTitle).attrs({
  as: 'h1'
})``;