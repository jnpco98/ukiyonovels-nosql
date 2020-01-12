import styled from 'styled-components/macro';
import Button from '../button';
import * as M from '../../../settings/media';
import Text, { TextType } from '../text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import { Paragraph, SubsectionTitle } from '../text/style';

export const InfoCardContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme, ...props }) => theme.colors.black};
`;

export const InfoCardContent = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 1rem;

  ${M.MEDIA_MEDIUM} {
    margin-left: 1.5rem;
  }

  ${M.MEDIA_XLARGE} {
    margin-left: 2rem;
  }
`;

export const InfoCardTitle = styled(SubsectionTitle)`    
  margin-bottom: 0.7rem;
  max-width: 80%;

  ${M.MEDIA_SMALL} {
    margin-bottom: 1.2rem;
  }
`;

export const InfoCardDescription = styled(Paragraph)`
  margin-bottom: 0.3rem;

  ${M.MEDIA_SMALL} {
    margin-bottom: 0.7rem;
  }
`;

export const InfoCardMetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoCardButtonContinue = styled(Button)`
  align-self: baseline;
`;

export const InfoCardMeta = styled.div`
  margin: 0.4rem 0;

  ${M.MEDIA_SMALL} {
    margin-bottom: 1rem;
  }
`;

export const InfoCardCalendarIcon = styled(FontAwesomeIcon).attrs({
  icon: faCalendarAlt
})`
  margin-right: 0.3rem;
`;

export const InfoCardLikesIcon = styled(FontAwesomeIcon).attrs({
  icon: faHeart
})`
  margin-right: 0.3rem;
`;

export const InfoCardViewsIcon = styled(FontAwesomeIcon).attrs({
  icon: faEye
})`
  margin-right: 0.3rem;
`;

export const InfoCardText = styled(Text).attrs({
  textType: TextType.Span
})`
  margin-right: 0.7rem;
  margin-bottom: 0.2rem;
`;